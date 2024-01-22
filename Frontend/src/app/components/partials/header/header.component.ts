import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/shared/models/usuario';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  [x: string]: any;
  usuario:Usuario;
  showLogin: boolean = false;
  showRegister: boolean = false;
  showCarrito: boolean = false;
  constructor(private _productoService: ProductoService,usuarioService:UsuarioService) {
    this.usuario=usuarioService.getUsuarioFromLocalStorage()
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
    this.hideOtherComponents('login');
  }

  onRegisterClick() {
    this.showRegister = true;
    this.showLogin = false;
    this.hideOtherComponents('register');
  }

  onLoginClick() {
    this.showLogin = true;
    this.showRegister = false;
    this.hideOtherComponents('login');
  }

  mostrartodos(){
    this._productoService.setCategoriaSeleccionada("");
  }


toggleCarrito() {
  this.showCarrito = !this.showCarrito;
  this.hideOtherComponents('carrito');
}


  hideOtherComponents(exclude: string) {
    if (exclude !== 'login') {
      this.showLogin = false;
    }
    if (exclude !== 'register') {
      this.showRegister = false;
    }
    if (exclude !== 'carrito') {
      this.showCarrito = false;
    }
  }
  
  mostrarTodos() {
    this._productoService.setCategoriaSeleccionada('');
  }
}
