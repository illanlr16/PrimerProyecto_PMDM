import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaHalloween } from '../tarjeta-halloween/tarjeta-halloween';


@Component({
  imports: [ReactiveFormsModule, TarjetaHalloween],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html',
})
export class FormularioHalloween {

  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.maxLength(200), Validators.minLength(5),Validators.required]), 
    propietario: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.maxLength(50), Validators.minLength(3), Validators.required])
  })

  guardarObjetos: any[] = []

  enviar(){
    // console.log(this.formularioHalloween.value)
    // console.log(this.formularioHalloween.get('email')?.value)
    this.guardarObjetos.push(this.formularioHalloween.value)    

    this.formularioHalloween.reset()
  }

  eliminar(index:number){
    this.guardarObjetos.splice(index, 1)
  }
}
