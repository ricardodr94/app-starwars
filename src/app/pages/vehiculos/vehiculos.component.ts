import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosDTO } from 'src/app/models/PropertySwapi';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent  {

  vehiculos: VehiculosDTO[] = [];


  constructor(private swapiService: SwapiService, private router: Router) {
    this.swapiService.getVehiculos()
      .subscribe((listaVehiculos: any) => {
        this.vehiculos = listaVehiculos.results;
        console.log(this.vehiculos);
        this.setDatosVehiculos();
      });
  }

  setDatosVehiculos() {
    for (let i = 0; i < this.vehiculos.length; i++) {
      this.vehiculos[i].url_images = "assets/img/vehiculos/" + this.vehiculos[i].name + ".jpg";
      console.log(this.vehiculos[i]);
    }
  }

  verVehiculo( id :number) {
    let valor = this.vehiculos[id].url.split('/')
    console.log(valor)
    this.router.navigate(['/vehiculo', valor[5]]);
    
  }

  searchVehiculos(texto:string){
      this.swapiService.getFiltroVehiculos(texto)
          .subscribe((vehiculos)=>{
              this.vehiculos = vehiculos.results;
              this.setDatosVehiculos();
          });
  }



}
