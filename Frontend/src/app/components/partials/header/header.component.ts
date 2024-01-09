import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  [x: string]: any;
  showLogin: boolean = false;
  showRegister: boolean = false;
  showCarrito: boolean = false;
  constructor(private _productoService: ProductoService) {}

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
    this._productoService.getProductos();
  }
}
