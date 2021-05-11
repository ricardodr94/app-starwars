import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculo: any = {};

  constructor(private swapiService: SwapiService,
              private router: ActivatedRoute) {
   
      this.router.params.subscribe(( params )=>{
          this.getVehiculo(params['id']);
      });
  }


  getVehiculo(id: string){
    this.swapiService.getVehiculo(id)
        .subscribe( vehiculo=>{
           this.vehiculo = vehiculo;
           this.vehiculo.url_images = "assets/img/vehiculos/"+this.vehiculo.name+".jpg"; 
           console.log(this.vehiculo);
        });
  }

  ngOnInit(): void {
  }

}
