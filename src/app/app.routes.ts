import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo'
import { Vegetales } from './components/vegetales/vegetales';
import { Hermingo } from './components/hermingo/hermingo';
import { Calculadora } from './components/calculadora/calculadora';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';
import { TarjetaHalloween } from './components/tarjeta-halloween/tarjeta-halloween';
import { Galletas } from './components/galletas/galletas';

export const routes: Routes = [
    {path: '', component: Hermingo},
    {path: 'semaforo', component: Semaforo},
    {path: 'vegetales', component: Vegetales},
    {path: 'hermingo', component: Hermingo},
    {path: 'calculadora', component: Calculadora},
    {path: 'formulario-halloween', component: FormularioHalloween},
    {path: 'galletas', component: Galletas},
];
