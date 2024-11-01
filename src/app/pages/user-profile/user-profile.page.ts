import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserProfile } from 'src/app/models/user.model';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  userProfile: UserProfile;

  constructor(private userService: UserService, private authService: AuthServiceService, private router: Router) {
    // Initialisation avec un profil utilisateur par défaut
    this.userProfile = this.defaultUserProfile();
  }

  ngOnInit() {
    this.loadUserProfile(); // Chargement du profil utilisateur lors de l'initialisation
  }

  // Méthode pour charger le profil utilisateur
  loadUserProfile() {
    const profile = this.userService.getUserProfile();
    this.userProfile = profile || this.defaultUserProfile(); // Assurez-vous de ne pas avoir d'erreur
  }

  // Méthode pour retourner un profil utilisateur par défaut
  defaultUserProfile(): UserProfile {
    return {
      id: 0, // Valeur par défaut, ajustez selon vos besoins
      avatarUrl: '', // Valeur par défaut
      name: '', // Valeur par défaut
      email: '', // Valeur par défaut
      phone: '', // Valeur par défaut (facultatif)
      matches: [], // Tableau vide par défaut
      ratings: [], // Tableau vide par défaut
      totalMatches: 0, // Valeur par défaut
      wins: 0, // Valeur par défaut
      losses: 0, // Valeur par défaut
    };
  }

  addMatch(event: Event) {
    event.stopPropagation(); // Empêche les conflits d'événements
    this.router.navigate(['/event-create']); // Navigation vers la page de création d'événement
  }

  editProfile(event: Event) {
    event.stopPropagation(); // Empêche les conflits d'événements
    this.router.navigate(['/edit-profile']); // Navigation vers la page d'édition de profil
  }

  logout(event: Event) {
    event.stopPropagation(); // Empêche les conflits d'événements
    this.authService.signOut(); // Déconnexion de l'utilisateur
    this.router.navigate(['/login']); // Navigation vers la page de connexion
  }

  goBack() {
    this.router.navigate(['/home']); // Navigation vers la page d'accueil
  }
  updateProfileImage(newImageUrl: string) {
    this.userService.updateAvatarUrl(newImageUrl); // Mettez à jour l'URL dans UserService
    this.loadUserProfile(); // Rechargez le profil utilisateur pour mettre à jour l'affichage
  }
}
