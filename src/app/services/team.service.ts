import { Injectable } from '@angular/core';
import { Team } from '../models/team.model.js'; // Importer l'interface Team

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teams: Team[] = [
    { id: 1, name: 'Team A', members: ['Player 1', 'Player 2'], performance: { wins: 5, losses: 3 } },
    // Ajoutez d'autres équipes ici
  ];

  constructor() {}

  getTeams(): Team[] {  // Définir le type de retour comme étant un tableau d'équipes
    return this.teams;
  }

  getTeamById(id: number): Team | undefined {  // Utiliser l'interface pour typer le retour
    return this.teams.find(team => team.id === id);
  }

  createTeam(name: string, members: string[]) {
    const newTeam: Team = {
      id: this.teams.length + 1,
      name,
      members,
      performance: { wins: 0, losses: 0 },
    };
    this.teams.push(newTeam);
  }

  addMemberToTeam(teamId: number, member: string) {
    const team = this.getTeamById(teamId);
    if (team) {
      team.members.push(member);
    }
  }

  trackPerformance(teamId: number, wins: number, losses: number) {
    const team = this.getTeamById(teamId);
    if (team) {
      team.performance.wins += wins;
      team.performance.losses += losses;
    }
  }
}
