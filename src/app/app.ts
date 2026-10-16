import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Calculadora } from './components/calculadora/calculadora';
import { Vegetales } from './components/vegetales/vegetales';
import { Hermingo } from './components/hermingo/hermingo';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
  imports: [RouterOutlet, Semaforo, Calculadora, Vegetales, Hermingo, NavBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('PrimerProyecto');
}
