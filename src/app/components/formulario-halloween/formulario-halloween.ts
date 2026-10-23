import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  imports: [ReactiveFormsModule,],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html',
})
export class FormularioHalloween {

  formularioHalloween = new FormGroup({
    nombre: new FormControl('', [Validators.maxLength(50), Validators.minLength(3), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]), 
    edad: new FormControl('', [Validators.min(0), Validators.max(120), Validators.required]),
    objeto: new FormControl('', [Validators.maxLength(50), Validators.minLength(3), Validators.required])
  })

  guardarObjetos: any[] = []

  enviar(){
    console.log(this.formularioHalloween.value)
    console.log(this.formularioHalloween.get('email')?.value)
    this.guardarObjetos.push(this.formularioHalloween.value)    
  }
}
