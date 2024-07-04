import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrenotazioneService } from './prenotazione.service';
import { Prenotazione } from './prenotazione';
import { CommonModule } from '@angular/common';

// yes
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `<table>
    <tr>
     <th>Albergo</th>
      <th>Da</th>
      <th>A</th>
      <th>Prezzo</th>
      <th>Persona</th>
      <th>Camera</th>
    </tr>

    <tr *ngFor="let p of prenotazioni; trackBy: trackById">
     <td>{{ p.albergo.nome }}</td>
      <td>{{ p.dataDa }}</td>
      <td>{{ p.dataA }}</td>
      <td>{{ p.prezzo }}</td>
      <td *ngFor="let persona of p.persona">{{ persona.nome }}</td>
      <td>{{ p.camera.nome }}</td>
    </tr>
  </table> `,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  trackById(index: number, item: Prenotazione) {
    return item.persona;
  }

  title = 'simulazione_esame_client';
  prenotazioni: Prenotazione[] = [];

  constructor(private prenotazioneService: PrenotazioneService) {}

  ngOnInit() {
    this.prenotazioneService.getAll().subscribe({
      next: (resp: Prenotazione[]) => {
        console.log(resp);
        this.prenotazioni = resp;
      },
      error: (err: Error) => {
        alert('Errore nel ricevimento dei dati');
        console.error(err.message);
      },
    });
  }
}
