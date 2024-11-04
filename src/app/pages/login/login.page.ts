import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private authService: AuthServiceService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [''],       // Removed Validators
      password: [''],    // Removed Validators
    });
  }

  // Spring Boot Login
  async loginWithSpring() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.loginWithSpring(
      this.ionicForm.value.email,
      this.ionicForm.value.password
    ).subscribe({
      next: (response) => {
        const loginCount = response.loginCount;

        // Route based on the loginCount value
        if (loginCount === 1) {
          this.router.navigate(['/skip1']);
        } else {
          this.router.navigate(['/home']);
        }

        this.presentToast('Login successful with Spring backend!');
      },
      error: (error) => {
        this.presentToast('Spring login failed. Please try again.');
        console.error(error);
      },
      complete: () => loading.dismiss()
    });
  }

  // Display toast messages
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    const passwordInput = document.querySelector('ion-input[formControlName="password"]');
    if (passwordInput) {
      const currentType = passwordInput.getAttribute('type');
      passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
    }
  }

  // Form controls getter for validation (if needed for future use)
  get errorControl() {
    return this.ionicForm.controls;
  }
}
