import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage {
  newPassword: string = '';   // Variable pour le nouveau mot de passe
  confirmPassword: string = '';  // Variable pour la confirmation du mot de passe

  constructor(private navCtrl: NavController) {}

  // Fonction pour créer le mot de passe
  createPassword() {
    if (this.newPassword === this.confirmPassword) {
      // Si les mots de passe correspondent
      console.log('Password created successfully!');
      
      // Logique pour sauvegarder le mot de passe (ajoutez une API ou logique ici si nécessaire)

      // Redirection vers la page "passwordchanged"
      this.navCtrl.navigateForward('/passwordchanged');
    } else {
      // Si les mots de passe ne correspondent pas
      console.error('Passwords do not match!');
    }
  }
}