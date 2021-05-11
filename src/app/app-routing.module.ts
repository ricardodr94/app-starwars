import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { HomeComponent } from './pages/home/home.component';
import { NavesComponent } from './pages/naves/naves.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { PlanetasComponent } from './pages/planetas/planetas.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { NaveComponent } from './pagesSecundary/nave/nave.component';
import { PersonajeComponent } from './pagesSecundary/personaje/personaje.component';
import { PlanetaComponent } from './pagesSecundary/planeta/planeta.component';
import { VehiculoComponent } from './pagesSecundary/vehiculo/vehiculo.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'personaje/:id', component: PersonajeComponent },
    { path: 'planetas', component: PlanetasComponent },
    { path: 'planeta/:id', component: PlanetaComponent },
    { path: 'naves', component: NavesComponent },
    { path: 'nave/:id', component: NaveComponent },
    { path: 'vehiculos', component: VehiculosComponent },
    { path: 'vehiculo/:id', component: VehiculoComponent },
    { path: '', pathMatch:'full', redirectTo: '/home' },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
