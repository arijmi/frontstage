import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  ionicForm: FormGroup;

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private authService: AuthServiceService,
    private router: Router,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: [''],        // Removed Validators
      password: [''],     // Removed Validators
      role: [''],         // Removed Validators
      name: [''],         // Removed Validators
      lastName: [''],     // Removed Validators
      age: [''],          // Removed Validators
      position: [''],     // Removed Validators
      experience: [''],   // Removed Validators
    });
  }

  async signUP() {
    const loading = await this.loadingController.create();
    await loading.present();

    const userData = {
      email: this.ionicForm.value.email,
      password: this.ionicForm.value.password,
      role: this.ionicForm.value.role,
      name: this.ionicForm.value.name,
      lastName: this.ionicForm.value.lastName,
      age: this.ionicForm.value.age,
      position: this.ionicForm.value.position,
      experience: this.ionicForm.value.experience,
    };

    this.authService.registerUserWithSpring(userData).subscribe({
      next: async () => {
        await loading.dismiss();
        this.presentToast('Signup successful!');
        this.router.navigate(['/login']); // Redirect upon successful signup
      },
      error: async (error) => {
        await loading.dismiss();
        this.presentToast('Signup failed. Please try again.');
        console.error('Signup error:', error);
      },
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });
    await toast.present();
  }
}
