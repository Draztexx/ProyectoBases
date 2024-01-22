export class Producto{
    _id?: number;
    nombre!: string;
    categoria!: string;
    precio!: number;
    tags?: string[];
    url!: string;
    fechaCreacion?:Date;
    disponible ?: boolean;

    constructor(nombre: string, categoria: string, precio: number, tags: string[],url:string, fechaCreacion:Date, disponible:boolean){
        this.nombre=nombre;
        this.categoria=categoria;
        this.precio=precio;
        this.tags=tags;
        this.url=url;
        this.fechaCreacion=fechaCreacion;
        this.disponible=disponible;
    }




}
