import { CarritoItem } from './carritoItem';

export class Carrito{
    items:CarritoItem[]=[];
    precioTotal:number=0;
    cantidadTotal:number=0;
    correo:string="";
}
