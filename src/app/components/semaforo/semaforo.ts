import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {

  semaforos = Array(5)

  // Señales
  contador = signal(0);
  colorin = signal("grey")
  rojo = signal("grey")
  amarillo = signal("grey")
  verde = signal("grey")

  //Metodo incremental
  incrementar() {
    this.contador.update(valor => valor + 1);
    this.revisarColor()
    this.revisarBackgroundAmarillo()
    this.revisarBackgroundRojo()
    this.revisarBackgroundVerde()
  }

  //metodo decremental 
  decrementar() {
    this.contador.update(valor => valor - 1);
    this.revisarColor()
    this.revisarBackgroundAmarillo()
    this.revisarBackgroundRojo()
    this.revisarBackgroundVerde()
  }

  // metodo reset
  resetear() {
    this.contador.set(0);
    this.revisarColor()
    this.revisarBackgroundAmarillo()
    this.revisarBackgroundRojo()
    this.revisarBackgroundVerde()
  }

  revisarColor(){
    if(this.contador() >= 2){
      this.colorin.set("red");

    } else if(this.contador() == 1){
      this.colorin.set("yellow");

    } else {
      this.colorin.set("green");
    }
  }

  revisarBackgroundRojo(){
    if(this.contador() >= 2){
      this.rojo.set("red")
    } else{
      this.rojo.set("grey")
    }
  }

  revisarBackgroundAmarillo(){
    if(this.contador() == 1){
      this.amarillo.set("yellow")
    } else {
      this.amarillo.set("grey")
    }
  }

  revisarBackgroundVerde(){
    if(this.contador() < 1){
      this.verde.set("green")
    } else {
      this.verde.set("grey")
    }
  }
}
