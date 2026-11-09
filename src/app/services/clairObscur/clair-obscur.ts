import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class ClairObscur {

    private clair = true
    private document = inject(DOCUMENT)

    cambiarColor():void{
        this.clair = !this.clair
        let html = this.document.documentElement

        html.classList.toggle('clair', this.clair)
        html.classList.toggle('obscur', !this.clair)

        console.log("color cambiado")
    }
}
