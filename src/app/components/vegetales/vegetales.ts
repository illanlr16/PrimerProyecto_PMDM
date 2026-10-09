import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-vegetales',
  styleUrl: './vegetales.css',
  templateUrl: './vegetales.html',
})
export class Vegetales {

  vegetales:Vegetal[] = [new Vegetal("/images/pepino.png","pepino", true), new Vegetal("/images/brocoli.png","brocoli", true), new Vegetal("/images/coliflor.png","coliflor", false), new Vegetal("/images/berzas.png","berzas", true), new Vegetal("/images/espinacas.png","espinacas", false)]

}

class Vegetal{
  imagen:String
  nombre:String
  like:boolean

  constructor(imagen:String, nombre:string, like:boolean){
    this.imagen = imagen
    this.nombre = nombre
    this.like = like

  }
}
