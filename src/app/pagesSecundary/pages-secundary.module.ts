import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes secundarios
import { PersonajeComponent } from './personaje/personaje.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { NaveComponent } from './nave/nave.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

//Modulos
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonajeComponent,
    PlanetaComponent,
    NaveComponent,
    VehiculoComponent
  ],
  exports:[
    PersonajeComponent,
    PlanetaComponent,
    NaveComponent,
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesSecundaryModule { }
