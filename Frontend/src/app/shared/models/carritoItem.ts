import { Producto } from './producto';

export class CarritoItem{
    constructor(public producto:Producto){}
    cantidad:number=1;
    precio:number=this.producto.precio;
}