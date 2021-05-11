import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanetasDTO } from 'src/app/models/PropertySwapi';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent  {
  
  planetas: PlanetasDTO[] = [];

  constructor(private swapiService: SwapiService, private router:Router ) { 
    this.swapiService.getPlanetas()
        .subscribe(( listaPlanetas ) =>{
            this.planetas = listaPlanetas.results;
            console.log(this.planetas);
            this.setDatosPlanetas();

    });

  }

  setDatosPlanetas(){
    for(let i=0; i<this.planetas.length; i++){ 
       this.planetas[i].url_images="assets/img/planetas/"+this.planetas[i].name+".jpg";  
       console.log(this.planetas[i]);
    }
  }

  verPlaneta( idPlaneta: number){
    let valor = this.planetas[idPlaneta].url.split('/');
    console.log(valor);
    this.router.navigate(['/planeta', valor[5]]);
 }
     
 searchPlanetas( texto: string ){
     this.swapiService.getFiltroPlanetas(texto)
         .subscribe((planetas)=>{
              this.planetas = planetas.results;
              this.setDatosPlanetas();
         });
 }
 

}
