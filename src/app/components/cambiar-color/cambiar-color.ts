import { Component, inject } from '@angular/core';
import { ClairObscur } from '../../services/clairObscur/clair-obscur'

@Component({
  imports: [],
  selector: 'app-cambiar-color',
  styleUrl: './cambiar-color.css',
  templateUrl: './cambiar-color.html',
})

export class CambiarColor {
  clairObscur = inject(ClairObscur)

  cambiarColor():void{
    this.clairObscur.cambiarColor();
  }
}
