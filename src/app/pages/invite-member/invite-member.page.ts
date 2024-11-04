import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../services/event.service'; // Utilisez EventService au lieu de TeamService
import { Event } from '../../models/event.model'; // Assurez-vous que l'interface Event est importée

@Component({
  selector: 'app-invite-member',
  templateUrl: './invite-member.page.html',
  styleUrls: ['./invite-member.page.scss'],
})
export class InviteMemberPage implements OnInit {
  email: string = '';
  event: Event | undefined;

  constructor(private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    const eventId = Number(this.route.snapshot.paramMap.get('id'));
    if (eventId) {
      this.eventService.getEventById(eventId).subscribe({
        next: (event) => (this.event = event),
        error: (error) => console.error('Error fetching event for invite:', error)
      });
    }
  }
  loadEvent(eventId: number) {
    this.eventService.getEventById(eventId).subscribe({
      next: (event: Event) => (this.event = event),
      error: (error: any) => console.error('Error fetching event for invite:', error)
    });
  }

  sendInvitation() {
    if (this.email && this.event) {
      // Logique pour envoyer l'invitation par email ou via une notification push
      alert(`Invitation sent to ${this.email} to join ${this.event.title}`);
      this.email = '';
    }
  }
}
