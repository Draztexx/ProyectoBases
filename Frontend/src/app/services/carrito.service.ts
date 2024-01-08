import { Injectable } from '@angular/core';
import { Carrito } from '../shared/models/carrito';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../shared/models/producto';
import { CarritoItem } from '../shared/models/carritoItem';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito:Carrito=this.getCarritoFromLocalStorage();
  private carritoSubject: BehaviorSubject<Carrito>= new BehaviorSubject(this.carrito);
  constructor() { }

  addToCarrito(producto:Producto):void{
    let carritoItem=this.carrito.items.find(item=>item.producto._id===producto._id);
    if(carritoItem){
      this.incrementarCantidad(producto);
    }else{
      this.carrito.items.push(new CarritoItem(producto));
      this.setCarritoToLocalStorage();
    }
  }

  removeFromCarrito(productoId:number | undefined):void{
    if (productoId) {
      this.carrito.items = this.carrito.items.filter(item => item.producto._id !== productoId);
      this.setCarritoToLocalStorage();
    }
  }

  changeCantidad(productoId:number | undefined,cantidad:number){
    let carritoItem=this.carrito.items.find(item=>item.producto._id===productoId);
    if(!carritoItem){
      return;
    }else{
      carritoItem.cantidad=cantidad;
      carritoItem.precio=cantidad*carritoItem.producto.precio;
      this.setCarritoToLocalStorage();
    }
  }

  clearCart(){
    this.carrito=new Carrito();
    this.setCarritoToLocalStorage();
  }

  getCarritoObservable():Observable<Carrito>{
    return this.carritoSubject.asObservable();
  }

  private setCarritoToLocalStorage():void{
    this.carrito.precioTotal=this.carrito.items.reduce((prevSum,currentItem)=>prevSum+currentItem.precio,0)
    this.carrito.cantidadTotal=this.carrito.items.reduce((prevSum,currentItem)=>prevSum+currentItem.cantidad,0)
    const carritoJson=JSON.stringify(this.carrito);
    localStorage.setItem('Carrito',carritoJson);
    this.carritoSubject.next(this.carrito);
  }

  private getCarritoFromLocalStorage():Carrito{
    const carritoJson=localStorage.getItem('Carrito');
    return carritoJson? JSON.parse(carritoJson):new Carrito();
  }

  incrementarCantidad(producto: Producto): void {
    const carritoItem = this.carrito.items.find(item => item.producto._id === producto._id);
  
    if (carritoItem) {
      carritoItem.cantidad += 1;
      carritoItem.precio = carritoItem.cantidad * carritoItem.producto.precio;
    } else {

      console.error('El producto no está en el carrito.');
      return;
    }
  
    this.setCarritoToLocalStorage();
  }


}
