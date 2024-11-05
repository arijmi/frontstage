import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { Event, Match } from 'src/app/models/event.model';
import { Player } from 'src/app/models/player.model';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.page.html',
  styleUrls: ['./event-detail.page.scss'],
})
export class EventDetailPage  {
  match = {
    location: 'Stade Vélodrome',
    venue: 'Palais omnisports à Paris',
    date: '24/07/2025',
    time: '10:30 - 11:30',
    team1: [
      { name: 'Youssef', avatarUrl: 'path/to/avatar1.jpg' },
      { name: 'Mahdi', avatarUrl: 'path/to/avatar2.jpg' },
      { name: 'Mohamed', avatarUrl: 'path/to/avatar3.jpg' },
      // more players...
    ],
    team2: [
      { name: 'Youssef', avatarUrl: 'path/to/avatar4.jpg' },
      { name: 'Mahdi', avatarUrl: 'path/to/avatar5.jpg' },
      { name: 'Mohamed', avatarUrl: 'path/to/avatar6.jpg' },
      // more players...
    ]
  };

  selectedTeam: string;

  getTeamDisplay(team: { name: string, avatarUrl: string }[]): string {
    const displayedPlayers = team.slice(0, 3).map(player => player.name).join(', ');
    const additionalCount = team.length > 3 ? `+${team.length - 3}` : '';
    return `${displayedPlayers} ${additionalCount}`;
  }

  joinTeam() {
    if (this.selectedTeam) {
      console.log(`Joining ${this.selectedTeam}`);
      // Implement logic to add the user to the selected team
    }
  }
}
