import { Component, inject} from '@angular/core';
import { Mejoras } from '../../services/mejoras/mejoras'
import { PanelPrestigio } from '../panel-prestigio/panel-prestigio';
import { Prestigio } from '../../services/prestigio/prestigio'

@Component({
  imports: [PanelPrestigio],
  selector: 'app-galletas',
  styleUrl: './galletas.css',
  templateUrl: './galletas.html',
})
export class Galletas {

  imagen = "/images/galletaSinBackground.png"
  readonly mejoras = inject(Mejoras)
  readonly prestigio = inject(Prestigio)
  
}
