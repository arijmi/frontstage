import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { Event } from '../models/event.model';
import { catchError } from 'rxjs/operators';
import { AuthServiceService } from '../auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventApiUrl = 'http://localhost:8080/api/events';

  constructor(private http: HttpClient, private authService: AuthServiceService) {}

  
  // Method to get all events
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventApiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching events:', error);
        return throwError(() => error);
      })
    );
  }

  // Method to get a single event by ID
  getEventById(eventId: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventApiUrl}/${eventId}`).pipe(
      catchError((error) => {
        console.error(`Error fetching event with ID ${eventId}:`, error);
        return throwError(() => error);
      })
    );
  }

  // Method for deleting an event
  deleteEvent(eventId: number): Observable<any> {
    const token = this.authService.getToken();
    if (!token) {
      console.error('No token found. Please log in.');
      return throwError(() => new Error('Unauthorized: No token found.'));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete(`${this.eventApiUrl}/${eventId}`, { headers }).pipe(
      catchError((error) => {
        console.error(`Error deleting event with ID ${eventId}:`, error);
        return throwError(() => error);
      })
    );
  }
  // Method for creating an event
createEvent(eventData: any): Observable<any> {
  const token = this.authService.getToken();
  if (!token) {
    console.error('No token found. Please log in.');
    return throwError(() => new Error('Unauthorized: No token found.'));
  }

  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  return this.http.post(this.eventApiUrl, eventData, { headers }).pipe(
    catchError((error) => {
      console.error('Error creating event:', error);
      return throwError(() => error);
    })
  );
}

}
