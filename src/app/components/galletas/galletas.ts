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

  costeMejora = 20

  hacerClick(){
    this.contador.update(valor => valor + this.valorClick())
  }

  mejora(){

    if(this.contador() >= this.costeMejora) {

      this.valorClick.update(valor => valor * 2)

      this.contador.update(valor => valor - this.costeMejora)
    
      this.costeMejora = this.costeMejora * 1.5

    } else {

      return
    }

  }
}
