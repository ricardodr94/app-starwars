import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent  {

  naves: any[] = [];

  constructor(private swapiService: SwapiService, private router:Router) { 
     this.swapiService.getNavesEspaciales()
         .subscribe((listaNaves: any)=>{
           this.naves = listaNaves.results;
           console.log(this.naves);
           this.setDatosNaves();
         });
  }

  setDatosNaves(){
    for(let i=0; i<this.naves.length; i++){ 
       this.naves[i].url_images="assets/img/naves/"+this.naves[i].name+".jpg";  
       console.log(this.naves[i]);
    }
  }

  verNave( idNave: number){
    let valor = this.naves[idNave].url.split('/')
    console.log(valor)
    this.router.navigate(['/nave', valor[5]]);
  }

  searchNaves(texto:string){
      this.swapiService.getFiltroNaves(texto)
          .subscribe((naves)=>{
             this.naves = naves.results;
             this.setDatosNaves();
          });
  }


}
