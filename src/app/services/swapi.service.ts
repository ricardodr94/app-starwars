import { Injectable } from '@angular/core';

//Modulo HttpClient
import { HttpClient } from '@angular/common/http';
import { 
  DatosNaves, 
  DatosPersonajes, 
  DatosPlanetas, 
  DatosVehiculos,
  NavesDTO,PersonajesDTO, 
  PlanetasDTO, VehiculosDTO
} from '../models/PropertySwapi';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SwapiService {

   url_swapi = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  //Obtener personajes de Api starwars
  getPersonajes():Observable<DatosPersonajes>{
    return this.http.get<DatosPersonajes>( `${this.url_swapi}/people`);      
  }

  //Obtener un personaje de Api starwars
  getPersonaje( id: string ):Observable<PersonajesDTO>{
    return this.http.get<PersonajesDTO>(`${this.url_swapi}/people/${id}`);
  }

  //Obtener planetas de Api starwars
  getPlanetas():Observable<DatosPlanetas>{
    return this.http.get<DatosPlanetas>(`${this.url_swapi}/planets`);
  }

  //Obtener un planeta de Api starwars
  getPlaneta( id: string ):Observable<PlanetasDTO>{
    return this.http.get<PlanetasDTO>(`${this.url_swapi}/planets/${id}`);
  }

  //Obtener naves de Api starwars
  getNavesEspaciales():Observable<DatosNaves>{
    return this.http.get<DatosNaves>(`${this.url_swapi}/starships`);
  }

  //Obtener una nave de Api starwars
  getNave( id: string ):Observable<NavesDTO>{
    return this.http.get<NavesDTO>(`${this.url_swapi}/starships/${id}`);
  }


  //Obtener vehiculos de Api starwars
  getVehiculos():Observable<DatosVehiculos>{
    return this.http.get<DatosVehiculos>(`${this.url_swapi}/vehicles`);
  }

  //Obtener un vehiculo de Api starwars
  getVehiculo( id: string ):Observable<VehiculosDTO>{
    return this.http.get<VehiculosDTO>(`${this.url_swapi}/vehicles/${id}`);
  }
 

  //filtrar datos de personajes 
  getFiltroPersonajes( texto: string ):Observable<DatosPersonajes>{
      texto = texto.toLowerCase();
      return this.http.get<DatosPersonajes>(`${this.url_swapi}/people/?search=${texto}`);
  }

  //filtrar datos de planetas 
  getFiltroPlanetas( texto: string ):Observable<DatosPlanetas>{
      texto = texto.toLowerCase();
      return this.http.get<DatosPlanetas >(`${this.url_swapi}/planets/?search=${texto}`);
  }

   //filtrar datos de naves 
   getFiltroNaves( texto: string ):Observable<DatosNaves>{
       texto = texto.toLowerCase();
       return this.http.get<DatosNaves >(`${this.url_swapi}/starships/?search=${texto}`);
  }

  //filtrar datos de vehiculos 
  getFiltroVehiculos( texto: string ):Observable<DatosVehiculos>{
       texto = texto.toLowerCase();
       return this.http.get<DatosVehiculos >(`${this.url_swapi}/vehicles/?search=${texto}`);
  }



}
