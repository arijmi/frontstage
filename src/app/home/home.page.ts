// src/app/pages/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../models/event.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchTerm: string = '';

  filter: { date: string; location: string; type: string } = { date: '', location: '', type: '' };

  constructor(
    private eventService: EventService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadEvents(); // Fetch all events on component load
  }
  loadEvents() {
    this.eventService.getEvents().subscribe({
      next: (events: Event[]) => {
        this.events = events;
        this.filteredEvents = events;
      },
      error: (error: any) => console.error('Error loading events:', error)
    });
  }

  filterEvents() {
    if (!this.searchTerm) {
      this.filteredEvents = this.events;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredEvents = this.events.filter(event =>
        event.title.toLowerCase().includes(term) || 
        event.location.toLowerCase().includes(term)
      );
    }
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => {
      const matchesDate = !this.filter.date || event.date.includes(this.filter.date);
      const matchesLocation = !this.filter.location || event.location.toLowerCase().includes(this.filter.location.toLowerCase());
      const matchesType = !this.filter.type || event.type === this.filter.type;
      return matchesDate && matchesLocation && matchesType;
    });
  }

  viewEvent(event: any) {
    if (!event || !event.id) {
      console.error('Event ID is not provided:', event);
      return;
    }
    this.router.navigateByUrl(`/event-detail/${event.id}`);
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.id).subscribe({
      next: () => this.loadEvents(), // Refresh all events after deletion
      error: (error) => console.error('Error deleting event:', error),
    });
  }

  getProfileImage() {
    return this.userService.getUserProfile().avatarUrl;
  }
}
