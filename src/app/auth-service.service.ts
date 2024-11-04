import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'firebase/auth';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private profileImageUrl = new BehaviorSubject<string>('../assets/images/Ellipse 5.png');
  profileImage$ = this.profileImageUrl.asObservable();
  private springApiUrl = 'http://localhost:8080/api/auth/signin';
  private springApiUrlSignup = 'http://localhost:8080/api/auth/signup';
  private eventApiUrl = 'http://localhost:8080/api/events';

  constructor(public ngFireAuth: AngularFireAuth, private http: HttpClient) {}

  async registerUser(email: string, password: string, name: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginWithFirebase(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  loginWithSpring(email: string, password: string): Observable<any> {
    const payload = { email, password };
    return this.http.post(this.springApiUrl, payload).pipe(
      tap((response: any) => {
        const token = response.token;
        if (token) {
          console.log('Token received:', token); // Debugging log
          localStorage.setItem('authToken', token);
        }
      })
    );
  }

  registerUserWithSpring(userData: any): Observable<any> {
    return this.http.post(this.springApiUrlSignup, userData);
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }

  async getProfile(): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.ngFireAuth.onAuthStateChanged(
        (user) => {
          if (user) {
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
    this.profileImageUrl.next(newImageUrl);
  }

  async signOut() {
    localStorage.removeItem('authToken');
    return await this.ngFireAuth.signOut();
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Create event with authorization
  createEvent(eventData: any): Observable<any> {
    const token = this.getToken();
    
    if (!token) {
      console.error('No token found. Please log in.');
      return throwError(() => new Error('Unauthorized: No token found.'));
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`, // Ensure 'Bearer ' prefix is included
      'Content-Type': 'application/json'
    });
  
    return this.http.post(this.eventApiUrl, eventData, { headers }).pipe(
      tap({
        next: (response) => console.log('Event created successfully:', response),
        error: (error) => {
          console.error('Error creating event:', error.message, error);
          if (error.status === 401) {
            console.error('Unauthorized: Please log in again.');
          }
        }
      })
    );
  }
  
  
}
