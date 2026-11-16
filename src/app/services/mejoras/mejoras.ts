import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Mejoras {

    contador = signal(0)
    valorClick = signal(1)
    valorPorSegundo = signal(0)
    valorPorSegundoTotal = signal(0)
    galletasTotales = 0

    costeMejoraClick = 20
    nivelClick = 1

    costeMejoraIdle1 = 100
    nivelMejoraIdle1 = 1
    galletasSegundoIdle1 = 1

    costeMejoraIdle2 = 500
    nivelMejoraIdle2 = 1
    galletasSegundoIdle2 = 5


    constructor() {
        setInterval(() => {
            this.contador.update(valor => valor + this.valorPorSegundo())
            this.galletasTotales += this.valorPorSegundo()
        }, 1000)
    }

    hacerClick(){
        this.contador.update(valor => valor + this.valorClick())
        this.galletasTotales += this.valorClick()
  }

  mejora(){
    if(this.contador() >= this.costeMejoraClick) {

      this.valorClick.update(valor => valor * 2)

      this.contador.update(valor => valor - this.costeMejoraClick)
    
      this.costeMejoraClick = Math.floor(this.costeMejoraClick * 3)

      this.nivelClick += 1
    }
  }

  mejoraPorTiempo1() {
    if(this.contador() >= this.costeMejoraIdle1){

      this.contador.update(valor => valor - this.costeMejoraIdle1)

      this.valorPorSegundo.update(valor => valor + 1);

      this.costeMejoraIdle1 = Math.floor(this.costeMejoraIdle1 * 1.8)

      this.nivelMejoraIdle1 += 1

      this.valorPorSegundoTotal.update(valor => valor + this.galletasSegundoIdle1)
    }
  }

  mejoraPorTiempo2() {
    if(this.contador() >= this.costeMejoraIdle2){

      this.contador.update(valor => valor - this.costeMejoraIdle2)

      this.valorPorSegundo.update(valor => valor + 5);

      this.costeMejoraIdle2 = Math.floor(this.costeMejoraIdle2 * 2.2)

      this.nivelMejoraIdle2 += 1
      
      this.valorPorSegundoTotal.update(valor => valor + this.galletasSegundoIdle2)
    }
  }
    
}
