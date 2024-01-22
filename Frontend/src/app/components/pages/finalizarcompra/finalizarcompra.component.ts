import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { Carrito } from 'src/app/shared/models/carrito';

@Component({
  selector: 'app-finalizarcompra',
  templateUrl: './finalizarcompra.component.html',
  styleUrls: ['./finalizarcompra.component.css']
})
export class FinalizarcompraComponent  {
  
  carrito:Carrito;
  
  constructor(private carritoService: CarritoService){
    this.carrito=carritoService.getCarritoFromLocalStorage()
  }
  


  agregarCarrito(){
      
      this.carritoService.guardarCarrito();
      alert("Compra Finalizada")
      this.carritoService.clearCart()
;
  }



}
