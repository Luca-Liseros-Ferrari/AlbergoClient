import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prenotazione } from './prenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Prenotazione[]>('http://localhost:8080/api/prenotazioni');
  }
}
