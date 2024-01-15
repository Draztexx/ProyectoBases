import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/shared/models/carrito';

@Component({
  selector: 'app-finalizarcompra',
  templateUrl: './finalizarcompra.component.html',
  styleUrls: ['./finalizarcompra.component.css']
})
export class FinalizarcompraComponent  {
  
  
  constructor(private carritoService: CarritoService){

  }
  


  agregarCarrito(){
      this.carritoService.guardarCarrito(); 
;
  }



}
