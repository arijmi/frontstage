import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserProfile } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  userProfile!: UserProfile;
  selectedImageUrl: string | undefined;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.loadUserProfile(); // Chargement du profil utilisateur
  }

  loadUserProfile() {
    this.userProfile = this.userService.getUserProfile();
  }

  // Nouvelle méthode pour gérer la sélection de fichiers
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.userProfile.avatarUrl = reader.result as string; // Mise à jour de l'URL de l'avatar
      };

      reader.readAsDataURL(file); // Convertir le fichier en DataURL pour affichage
    }
  }

  saveChanges() {
    // Mise à jour du profil utilisateur
    this.userService.updateUserProfile({
      email: this.userProfile.email,
      phone: this.userProfile.phone,
      avatarUrl: this.userProfile.avatarUrl, // Assurez-vous de gérer l'URL de l'image si elle est changée
    });
    this.router.navigate(['/user-profile']); // Retour à la page de profil après sauvegarde
  }

  goBack() {
    this.router.navigate(['/home']); // Retour à la page de profil
  }
}
