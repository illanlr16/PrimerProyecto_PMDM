import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-vegetales',
  styleUrl: './vegetales.css',
  templateUrl: './vegetales.html',
})
export class Vegetales {
  verduras = Array("pepino", "brocoli", "coliflor", "berzas", "espinacas")
  frutas = Array(5)
}
