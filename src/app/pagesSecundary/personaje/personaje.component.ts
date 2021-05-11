import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent  {

  personaje: any = {};

  constructor( private swapiService: SwapiService, 
               private router: ActivatedRoute  ) 
  {                
      this.router.params.subscribe(( params )=>{
          this.getPersonaje(params['id']);
      });
  }

  getPersonaje(id: string){
      this.swapiService.getPersonaje(id)
          .subscribe( personaje=>{
            this.personaje = personaje;
            this.personaje.url_images = "assets/img/personajes/"+this.personaje.name+".jpg"; 
            console.log(this.personaje);
          });
  }




}
