import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
     NavbarComponent
  ],
  exports:[
     NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
