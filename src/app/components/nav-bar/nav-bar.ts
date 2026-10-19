import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';


@Component({
  imports: [MatButtonModule,MatIconModule,MatToolbarModule, RouterLink],
  selector: 'app-nav-bar',
  styleUrl: './nav-bar.css',
  templateUrl: './nav-bar.html',
})
export class NavBar {

  private router = inject(Router);

  lista(){
    this.router.navigate(['/vegetales'])
  }
}
