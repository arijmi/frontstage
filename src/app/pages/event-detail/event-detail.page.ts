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
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe({
        next: (event) => (this.event = event),
        error: (error) => console.error('Error fetching event details:', error)
      });
    }
  }
  

  loadEventDetails(eventId: number) {
    this.eventService.getEventById(eventId).subscribe({
      next: (event: Event) => (this.event = event),
      error: (error: any) => console.error('Error fetching event details:', error)
    });
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