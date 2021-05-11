import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Componente principal
import { AppComponent } from './app.component';


//Rutas
import { AppRoutingModule } from './app-routing.module';


//Modulos
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { PagesSecundaryModule } from './pagesSecundary/pages-secundary.module';

//Modulo HttpClientModule
import { HttpClientModule } from '@angular/common/http';


//Servicios
import { SwapiService } from './services/swapi.service';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule,
    HttpClientModule,
    PagesSecundaryModule
  ],
  providers: [ SwapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
