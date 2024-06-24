import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrenotazioneService } from './prenotazione.service';
import { Prenotazione } from './prenotazione';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'simulazione_esame_client';
  prenotazioni: Prenotazione[] = [];

  constructor(private prenotazioneService: PrenotazioneService ) {}

  ngOnInit() {
    this.prenotazioneService.getAll().subscribe({
      next: (resp: Prenotazione[]) => {
        console.log(resp);
        this.prenotazioni = resp;
      },
      error: (err: Error) => {
        alert("Errore nel ricevimento dei dati");
        console.error(err.message);
      }
    })
  }
}
