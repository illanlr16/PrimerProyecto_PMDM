import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hermingo',
  styleUrl: './hermingo.css',
  templateUrl: './hermingo.html',
})
export class Hermingo {

  imagen = ""

  mostrar_foto(){
    this.imagen = "/images/pepino.png"
  }
}
