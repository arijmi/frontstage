import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  visibility: string;
  numberOfPlayersPerTeam: number;
  eventType: string; 
}

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.page.html',
  styleUrls: ['./event-create.page.scss'],
})
export class EventCreatePage implements OnInit {
  event: Event = {
    title: '',
    date: new Date().toISOString(),
    location: '',
    description: '',
    visibility: 'PUBLIC',
    numberOfPlayersPerTeam: 1,
    eventType: 'MINI_SOCCER' 
  };

  constructor(
    private router: Router,
    private authService: AuthServiceService ,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  saveEvent() {
    const eventData = {
      name: this.event.title, // Ensure this maps correctly
      description: this.event.description,
      eventType: this.event.eventType,
      dateTime: new Date(this.event.date).toISOString(), // Format as ISO string
      location: this.event.location,
      numberOfPlayersPerTeam: this.event.numberOfPlayersPerTeam,
      visibility: this.event.visibility.toUpperCase() // Ensure uppercase
    };
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.getToken()}`,
      'Content-Type': 'application/json'
    });
  
    this.http.post('http://localhost:8080/api/events', eventData, { headers, responseType: 'text' }).subscribe({
      next: (response) => {
        console.log('Event created successfully:', response);
        this.router.navigate(['/event-list']);
      },
      error: (error) => {
        console.error('Error creating event:', error.message, error);
        if (error.status === 401) {
          console.error('Unauthorized: Please log in again.');
          this.router.navigate(['/login']);
        }
      }
    });
  }
  
  

  openLocationPicker() {
    this.router.navigate(['pickup-location'], {
      queryParams: { position: 'destination' },
      state: { pickupLocation: this.event.location }
    });
  }
}
