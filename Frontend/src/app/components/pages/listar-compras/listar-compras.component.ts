import { Component,OnInit  } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carrito } from 'src/app/shared/models/carrito';
import { Usuario } from 'src/app/shared/models/usuario';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit{
  usuario:Usuario;
  listacarritos:Carrito[]=[]

  constructor(private _carritoService:CarritoService,private usuarioService:UsuarioService) {
    this.usuario=usuarioService.getUsuarioFromLocalStorage()
    //this.listacarritos=carritoService.obtenerCarritosporCorreo(this.usuario)
   }
  ngOnInit(): void {
    this.obtenerCarritos()
  }


   obtenerCarritos() {
    this._carritoService.obtenerCarritosporCorreo(this.usuario).subscribe(
      (data: Carrito[]) => {
        this.listacarritos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }



}
