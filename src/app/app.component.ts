import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
import { MenuController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  userProfile: { name: string; description: string; avatarUrl: string } = {
    name: '',
    description: 'Joueur 1',
    avatarUrl: '../assets/images/Ellipse 5.png'
  };
  private profileImageSubscription: Subscription;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private menuCtrl: MenuController
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().then(user => {
      if (user) {
        this.userProfile.name = user.displayName || 'User Name';
        this.userProfile.avatarUrl = user.photoURL || '../assets/images/Ellipse 5.png';
      }
    }).catch(error => {
      console.error('Error getting user profile:', error);
    });

    // S'abonner aux changements d'image de profil
    this.profileImageSubscription = this.authService.profileImage$.subscribe(newImageUrl => {
      this.userProfile.avatarUrl = newImageUrl;
    });
  }

  ngOnDestroy() {
    if (this.profileImageSubscription) {
      this.profileImageSubscription.unsubscribe();
    }
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  goToProfile() {
    this.closeMenu();
    this.router.navigate(['/edit-profile']);
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']);
      this.closeMenu();
    });
  }
}
