import { Injectable } from '@angular/core';
import { UserProfile } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userProfile: UserProfile = {
    id: 1,
    name: 'Marc',
    email: 'marc@example.com',
    matches: [
      { id: 1, title: 'Match 1', date: '2024-09-01', location: 'Stadium A' },
      { id: 2, title: 'Match 2', date: '2024-09-10', location: 'Stadium B' },
    ],
    ratings: [
      { matchId: 1, rating: 5, comment: 'Great match!' },
      { matchId: 2, rating: 4, comment: 'Good performance.' },
    ],
    totalMatches: 2, // Ajoutez totalMatches si nécessaire
    wins: 1, // Ajoutez wins si nécessaire
    losses: 1, // Ajoutez losses si nécessaire
    avatarUrl: 'assets/images/Ellipse 5.png', // Ajoutez un avatar par défaut
  };

  // Méthode pour récupérer le profil utilisateur
  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  // Méthode pour mettre à jour le profil utilisateur
  updateUserProfile(profile: Partial<UserProfile>): void {
    // Mettez à jour le profil en gardant les valeurs existantes
    this.userProfile = { ...this.userProfile, ...profile };
  }
  updateAvatarUrl(newAvatarUrl: string): void {
    // Logique pour mettre à jour l'avatar de l'utilisateur
  }
}
