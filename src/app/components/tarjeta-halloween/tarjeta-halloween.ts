import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tarjeta-halloween',
  styleUrl: './tarjeta-halloween.css',
  templateUrl: './tarjeta-halloween.html',
})
export class TarjetaHalloween {

  imagen = input('')
  propietario = input('')
  descripcion = input('')
  objeto = input('')
}
