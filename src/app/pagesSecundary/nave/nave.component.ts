import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  nave: any = {};

  constructor(private swapiService: SwapiService,
              private router: ActivatedRoute) {
   
       this.router.params.subscribe(( params )=>{
           this.getNave(params['id']);
        });
  }


  getNave(id: string){
      this.swapiService.getNave(id)
          .subscribe( nave=>{
             this.nave = nave;
             this.nave.url_images = "assets/img/naves/"+this.nave.name+".jpg"; 
          });
  }

  ngOnInit(): void {
  }

}
