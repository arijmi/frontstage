import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service'; // Importer le service
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];
  filteredEvents: Event[] = [];
  
  // Filtre initialisé
  filter = {
    date: '',
    location: '',
    type: '',
  };

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.loadEvents(); // Charger les événements au démarrage
  }

  loadEvents() {
    this.events = this.eventService.getEvents(); // Récupérer les événements du service
    this.filteredEvents = [...this.events]; // Initialiser les événements filtrés
  }

  viewEvent(event: Event) {
    this.router.navigate(['/event-detail']);
  }

  editEvent(event: Event) {
    this.router.navigate(['/event-create']);
  }

  deleteEvent(event: Event) {
    this.eventService.deleteEvent(event.id); // Supprimer l'événement du service
    this.loadEvents(); // Recharger la liste des événements après suppression
  }

  inviteMember(event: Event) {
    this.router.navigate(['/invite-member']);
  }

  applyFilters() {
    this.filteredEvents = this.events.filter(event => 
      (this.filter.date ? event.date.includes(this.filter.date) : true) &&
      (this.filter.location ? event.location.toLowerCase().includes(this.filter.location.toLowerCase()) : true)
      // Ajoutez le filtre pour le type si vous avez besoin
      // (this.filter.type ? event.type === this.filter.type : true)
    );
  }
}
