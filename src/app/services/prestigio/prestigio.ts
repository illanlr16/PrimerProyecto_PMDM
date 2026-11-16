import { Injectable, inject, signal } from '@angular/core';
import { Mejoras } from '../mejoras/mejoras'

@Injectable({providedIn: 'root'})
export class Prestigio {

    readonly mejoras = inject(Mejoras)
    ptsPrestigio = signal(0)

    reset() {
        let puntosGanados = Math.floor(this.mejoras.galletasTotales / 10)
        this.ptsPrestigio.update(puntos => puntos + puntosGanados)

        this.mejoras.galletasTotales = 0
        this.mejoras.contador.set(0)

        this.mejoras.valorClick.set(1)
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
}
