import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage implements OnInit {
  event: Event;

  constructor(private route: ActivatedRoute,   private router: Router,  private eventService: EventService) {
    const eventId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.loadEventDetails(eventId);
  }
  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      const event = this.eventService.getEventById(+eventId);
      if (event) {
        this.event = event;
      } else {
        console.error('Event not found');
        // Optionnel: redirigez l'utilisateur ou affichez un message d'erreur
      }
    } else {
      console.error('No event ID provided');
      // Optionnel: redirigez l'utilisateur ou affichez un message d'erreur
    }
  }
  

  loadEventDetails(eventId: number) {
    // Load event details from the server or local data
    this.event = { id: eventId, title: 'Match 1', date: '2024-09-01', location: 'Stadium A', description: 'Description 1' };
  }
  inviteMembers() {
    this.router.navigate(['/invite-member', { id: this.event.id }]);
  }
 

  manageInscriptions() {
    console.log('Managing inscriptions for event:', this.event.title);

    // Exemple de logique pour vérifier si l'utilisateur est déjà inscrit
    if (this.isUserAlreadyRegistered(this.event.id)) {
      console.log('User is already registered for this event.');
      // Ici, vous pourriez afficher un message ou permettre à l'utilisateur de se désinscrire
    } else {
      // Code pour ajouter l'utilisateur à la liste des participants
      this.registerUserForEvent(this.event.id);
      console.log('User has been registered for the event.');
    }
  }

  // Méthode fictive pour vérifier si un utilisateur est déjà inscrit
  isUserAlreadyRegistered(eventId: number): boolean {
    // Logique pour vérifier l'inscription
    return false; // Remplacez par la logique réelle
  }

  // Méthode fictive pour inscrire un utilisateur
  registerUserForEvent(eventId: number) {
    // Logique pour inscrire l'utilisateur
  }
}