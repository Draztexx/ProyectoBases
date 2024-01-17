import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carrito } from 'src/app/shared/models/carrito';
import { Usuario } from 'src/app/shared/models/usuario';


@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent {
  usuario:Usuario;
  listacarritos:Carrito[]=[]

  constructor(private carritoService:CarritoService,private usuarioService:UsuarioService) {
    this.usuario=usuarioService.getUsuarioFromLocalStorage()
   // this.listacarritos=carritoService.obtenerCarritosporCorreo(this.usuario)
   }




}
