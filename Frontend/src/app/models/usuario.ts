export class Usuario{
    _id?: number;
    nombre: string;
    correo: string;
    contrasena: string;

    constructor(nombre: string, correo: string, contrasena: string){
        this.nombre=nombre;
        this.correo=correo;
        this.contrasena=contrasena;
    }

}