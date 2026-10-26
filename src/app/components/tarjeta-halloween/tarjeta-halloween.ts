import { Component, input, output } from '@angular/core';

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

  borrar = output<void>()

  eliminar(){
    this.borrar.emit()
  }
}
