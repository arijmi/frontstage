import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];

  filter = {
    date: '',
    location: '',
    type: '',
  };

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (events) => {
        this.events = events;
        this.filteredEvents = events;
        console.log('Loaded Events:', events);
      },
      error: (error) => console.error('Error loading events:', error)
    });
  }

  viewEvent(event: Event) {
    this.router.navigate(['/event-detail']);
  }

  editEvent(event: Event) {
    this.router.navigate(['/event-create']);
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.id).subscribe({
      next: () => {
        console.log(`Event with ID ${event.id} deleted successfully`);
        this.loadEvents(); // Reload events list after deletion
      },
      error: (error) => console.error(`Error deleting event with ID ${event.id}:`, error)
    });
  }

  inviteMember(event: Event) {
    this.router.navigate(['/invite-member']);
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => 
      (this.filter.date ? event.date.includes(this.filter.date) : true) &&
      (this.filter.location ? event.location.toLowerCase().includes(this.filter.location.toLowerCase()) : true)
    );
  }
}
