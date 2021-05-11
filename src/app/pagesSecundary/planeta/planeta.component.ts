import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  
  planeta: any = {};
  
  constructor(private swapiService: SwapiService,
              private router: ActivatedRoute) {
             
       this.router.params.subscribe(( params )=>{
           this.getPlaneta(params['id']);
       });
  }


  getPlaneta(id: string){
    this.swapiService.getPlaneta(id)
        .subscribe( planeta=>{
          this.planeta = planeta;
          this.planeta.url_images = "assets/img/planetas/"+this.planeta.name+".jpg"; 
        });
  }
  ngOnInit(): void {
  }

}
