import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Liste des événements
  private events: Event[] = [
    { id: 1, title: 'Match 1', date: '2024-09-01', location: 'Stadium A', description: 'First match description' },
    { id: 2, title: 'Match 2', date: '2024-09-15', location: 'Stadium B', description: 'Second match description' },
    // Ajoutez d'autres événements si nécessaire
  ];

  // Retourne tous les événements
  getEvents(): Event[] {
    return this.events;
  }

  // Retourne un événement par son ID
  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  // Crée un nouvel événement
  createEvent(newEvent: Event): void {
    this.events.push(newEvent);
  }

  // Met à jour un événement existant
  updateEvent(updatedEvent: Event): void {
    const index = this.events.findIndex(event => event.id === updatedEvent.id);
    if (index !== -1) {
      this.events[index] = updatedEvent;
    }
  }

  // Supprime un événement par son ID
  deleteEvent(id: number): void {
    this.events = this.events.filter(event => event.id !== id);
  }
}
