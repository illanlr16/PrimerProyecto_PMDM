import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { Saludo } from '../../services/saludo/saludo';
import { CambiarColor } from '../cambiar-color/cambiar-color';


@Component({
  imports: [MatButtonModule,MatIconModule,MatToolbarModule, RouterLink, CambiarColor],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {

  private router = inject(Router);

  saludo = inject(Saludo);
  mensaje = this.saludo.saludar();

  lista(){
    this.router.navigate(['/vegetales'])
  }
}
