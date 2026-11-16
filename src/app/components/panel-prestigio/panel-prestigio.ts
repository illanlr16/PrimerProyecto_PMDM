import { Component, inject } from '@angular/core';
import { Mejoras } from '../../services/mejoras/mejoras'
import { Prestigio } from '../../services/prestigio/prestigio'

@Component({
  imports: [],
  selector: 'app-panel-prestigio',
  styleUrl: './panel-prestigio.css',
  templateUrl: './panel-prestigio.html',
})
export class PanelPrestigio {
  readonly mejoras = inject(Mejoras)
  readonly prestigio = inject(Prestigio)
}
