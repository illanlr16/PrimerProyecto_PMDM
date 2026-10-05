import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})

export class Calculadora {

numero1: number | null = null;
numero2: number | null = null;
resultado: number | string | null = null;

  private pantallaSeleccionada: 1 | 2 | null = null;

  seleccionarPantalla(pantalla: 1 | 2): void {
    this.pantallaSeleccionada = pantalla;
  }

  seleccionarNumero(numero: number): void {
    if(this.pantallaSeleccionada === 1){
      this.numero1 = numero;
    } else if(this.pantallaSeleccionada === 2){
      this.numero2 = numero;
    }
  }

  calcular(operacion: '+' | '-' | '*' | '/'): void{
    if(this.numero1 === null ||this.numero2 ===null){
      this.resultado = 'Selecciona los dos números';
      return;
    }

    switch(operacion){
      case '+':
      this.resultado = this.numero1 + this.numero2;
      break;
      case '-': this.resultado = this.numero1 - this.numero2;
      break;
      case '*': this.resultado = this.numero1 * this.numero2;
      break;
      case '/': this.resultado = this.numero1 / this.numero2;
      break;
    }
  }
}
