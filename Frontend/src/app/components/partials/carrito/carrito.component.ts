// carrito.component.ts

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Carrito } from '../../../shared/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { CarritoItem } from 'src/app/shared/models/carritoItem';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito!: Carrito;
  constructor(private h:HeaderComponent, private carritoService: CarritoService){

    this.carritoService.getCarritoObservable().subscribe((carrito)=>this.carrito=carrito)}

  ngOnInit(): void {
    
  }

  removeFromCarrito(carritoItem:CarritoItem){
    this.carritoService.removeFromCarrito(carritoItem.producto._id)
  }

  changeCantidad(carritoItem:CarritoItem, cantidadInString:string ){
    const cantidad=parseInt(cantidadInString);
    this.carritoService.changeCantidad(carritoItem.producto._id,cantidad);
  }


  @Input() isVisible: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  finalizarCompra() {
    this.h.toggleCarrito();
  }
}
