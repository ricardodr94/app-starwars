import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Componentes de pagina
import { PersonajesComponent } from './personajes/personajes.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { NavesComponent } from './naves/naves.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { HomeComponent } from './home/home.component';


//Modulos
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { PagesSecundaryModule } from '../pagesSecundary/pages-secundary.module';





@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    PlanetasComponent,
    NavesComponent,
    VehiculosComponent,
    
  ],
  exports:[
    HomeComponent,
    PersonajesComponent,
    PlanetasComponent,
    NavesComponent,
    VehiculosComponent,
 
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    PagesSecundaryModule
  ]
})
export class PagesModule { }
