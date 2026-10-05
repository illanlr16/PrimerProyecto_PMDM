import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Calculadora } from './components/calculadora/calculadora';

@Component({
  imports: [RouterOutlet, Semaforo, Calculadora],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PrimerProyecto');
}
