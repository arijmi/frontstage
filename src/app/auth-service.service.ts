import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';

export interface Users {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private profileImageUrl = new BehaviorSubject<string>('../assets/images/Ellipse 5.png'); // URL par défaut
  profileImage$ = this.profileImageUrl.asObservable();
  constructor(public ngFireAuth: AngularFireAuth) {}

  async registerUser(email: string, password: string, name: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }
  async getProfile(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.ngFireAuth.onAuthStateChanged(
        (user) => {
          if (user) {
            // Mettre à jour le BehaviorSubject avec l'image de profil actuelle de l'utilisateur
            this.profileImageUrl.next(user.photoURL || '../assets/images/Ellipse 5.png');
            resolve(user as User);
          } else {
            resolve(null);
          }
        },
        reject
      );
    });
  }

  updateProfileImage(newImageUrl: string) {
    this.profileImageUrl.next(newImageUrl); // Met à jour l'image de profil
  }


  async signOut() {
    return await this.ngFireAuth.signOut();
  }
}
