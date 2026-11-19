import { Injectable, inject, signal } from '@angular/core';
import { Mejoras } from '../mejoras/mejoras'

@Injectable({providedIn: 'root'})
export class Prestigio {

    readonly mejoras = inject(Mejoras)
    ptsPrestigio = signal(0)

    costeMejoraPrestigioClick = 100
    nivelMejoraPrestigioClick = 1

    costeMejoraPrestigioIdle = 200
    nivelMejoraPrestigioIdle = 1

    costeMejoraPrestigioPrecio = 500
    nivelMejoraPrestigioPrecio = 1   


    reset() {
        let puntosGanados = Math.floor(this.mejoras.galletasTotales / 10)
        this.ptsPrestigio.update(puntos => puntos + puntosGanados)

        this.mejoras.galletasTotales = 0
        this.mejoras.contador.set(0)

        if(this.nivelMejoraPrestigioClick == 2){
            this.mejoras.valorClick.set(2)

        } else {
            this.mejoras.valorClick.set(2)
            this.mejoras.valorClick.update(valor => (valor ** (this.nivelMejoraPrestigioClick - 1 )))
        }
        
        this.mejoras.costeMejoraClick = 20
        this.mejoras.nivelClick = 1
        
        this.mejoras.valorPorSegundo.set(0)
        this.mejoras.valorPorSegundoTotal.set(0)

        this.mejoras.costeMejoraIdle1 = 100
        this.mejoras.nivelMejoraIdle1 = 1
        this.mejoras.galletasSegundoIdle1 = 1

        this.mejoras.costeMejoraIdle2 = 500
        this.mejoras.nivelMejoraIdle2 = 1
        this.mejoras.galletasSegundoIdle2 = 5   
    }

    mejoraPrestigioClick(){
        if(this.ptsPrestigio() >= this.costeMejoraPrestigioClick){
            this.mejoras.valorClick.update(valor => valor * 2)

            this.ptsPrestigio.update(valor => valor - this.costeMejoraPrestigioClick)

            this.costeMejoraPrestigioClick = Math.floor(this.costeMejoraPrestigioClick * 3)

            this.nivelMejoraPrestigioClick++
        }
    }

    mejoraPrestigioIdle(){
        if(this.ptsPrestigio() >= this.costeMejoraPrestigioIdle){
            this.mejoras.valorPorSegundo.update(valor => valor * 2)

            this.ptsPrestigio.update(valor => valor - this.costeMejoraPrestigioIdle)

            this.costeMejoraPrestigioIdle = Math.floor(this.costeMejoraPrestigioIdle * 3)

            this.nivelMejoraPrestigioIdle++
        }
    }

    mejoraPrestigioPrecio(){
        if(this.ptsPrestigio() >= this.costeMejoraPrestigioPrecio){

            this.costeMejoraPrestigioPrecio = Math.floor(this.costeMejoraPrestigioPrecio * 3)

            Math.floor(this.mejoras.costeMejoraClick /= 2)

            Math.floor(this.mejoras.costeMejoraIdle1 /= 2)

            Math.floor(this.mejoras.costeMejoraIdle2 /= 2)

            this.nivelMejoraPrestigioPrecio++

        }
    }
}
