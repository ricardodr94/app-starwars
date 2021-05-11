import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesDTO } from 'src/app/models/PropertySwapi';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: PersonajesDTO[] = [];
  


  constructor(private swapiService: SwapiService, private router:Router ) {  

    this.swapiService.getPersonajes()
      .subscribe(( listaPersonajes ) =>{
      this.personajes = listaPersonajes.results;
      console.log(this.personajes);
      this.setDatosPersonajes();
              
    }); 
  }

  //EStablecer fotos de personajes
  setDatosPersonajes(){
     for(let i=0; i<this.personajes.length; i++){ 
        this.personajes[i].url_images="assets/img/personajes/"+this.personajes[i].name+".jpg";  
     }
  }

  //Ruta de un personaje
  verPersonaje( idPersonaje: number){
      let valor = this.personajes[idPersonaje].url.split('/');
      console.log(valor);
      this.router.navigate(['/personaje', valor[5]]);
  }

 //filtrar personajes
 searchPersonajes(texto:string){

    this.swapiService.getFiltroPersonajes(texto)
        .subscribe((personajes)=>{
           this.personajes = personajes.results;
           this.setDatosPersonajes();        
        })
 }
  ngOnInit(): void {
  }

}
