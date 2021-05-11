import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  escenarios: any[] = [
    {
      name:"Coruscant", 
      description:` Capital de la República Galáctica y 
      del posterior imperio. Se encuentra situado en el 
      centro de la galaxia y es uno de sus planetas más 
      poblados, hasta el punto que casi todo él es una 
      gran ciudad muy industrializada.`,
      img: "assets/img/planetas/Coruscant.jpg"
    },
    {
      name:"Endor", 
      description:`Una luna montañosa caracterizada por sus 
      grandes bosques y situada en el sistema homónimo. Sus 
      habitantes más conocidos son los ewoks, unos seres de 
      pequeño tamaño cuya forma corporal se asemeja a la de los osos.32​`,
      img: "assets/img/planetas/Endor.jpg"
    },
    {
      name:"Geonosis", 
      description:`de aspecto rocoso y árido. Sus principales pobladores, 
      los geonosianos, tienen rasgos insectoides y sus construcciones 
      son similares a los nidos de termitas`,
      img: "assets/img/planetas/Yavin IV.jpg"
    },
    {
      name:"Hoth", 
      description:`Un inhóspito planeta helado cuya temperatura se mantiene 
      durante todo el día por debajo de cero grados centígrados. Entre su 
      fauna autóctona se encuentran el depredador wampa y el tauntaun.`,
      img: "assets/img/planetas/Hoth.jpg"
    },
    {
      name:"Jakku", 
      description:`Un planeta desértico habitado por ladrones, forajidos y 
      refugiados que sirvió anteriormente como base secreta de investigación 
      imperial.`,
      img: "assets/img/planetas/Bespin.jpg"
    }    
  ];

  constructor() {
     
   }

  ngOnInit(): void {
  }

}
