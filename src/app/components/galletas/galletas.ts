import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-galletas',
  styleUrl: './galletas.css',
  templateUrl: './galletas.html',
})
export class Galletas {

  imagen = "/images/galleta.png"
  contador = signal(0)
  valorClick = signal(1)
  valorPorSegundo = signal(0);

  costeMejoraClick = 20
  costeMejoraIdle1 = 100
  costeMejoraIdle2 = 500

  constructor() {
    setInterval(()=> {
      this.contador.update(valor => valor + this.valorPorSegundo())
    }, 1000)
  }

  hacerClick(){
    this.contador.update(valor => valor + this.valorClick())
  }

  mejora(){
    if(this.contador() >= this.costeMejoraClick) {

      this.valorClick.update(valor => valor * 2)

      this.contador.update(valor => valor - this.costeMejoraClick)
    
      this.costeMejoraClick = Math.floor(this.costeMejoraClick * 3)

    }
  }

  mejoraPorTiempo1() {
    if(this.contador() >= this.costeMejoraIdle1){

      this.contador.update(valor => valor - this.costeMejoraIdle1)

      this.valorPorSegundo.update(valor => valor + 1);

      this.costeMejoraIdle1 = Math.floor(this.costeMejoraIdle1 * 1.8)
    }
  }

  mejoraPorTiempo2() {
    if(this.contador() >= this.costeMejoraIdle2){

      this.contador.update(valor => valor - this.costeMejoraIdle2)

      this.valorPorSegundo.update(valor => valor + 5);

      this.costeMejoraIdle2 = Math.floor(this.costeMejoraIdle2 * 2.2)
    }
  }
}
