import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:any;
 
  
  constructor(private h:HeaderComponent,private usuarioService: UsuarioService,private carritoService: CarritoService) {}
  ngOnInit(): void {
    this.usuario = this.usuarioService.getUsuarioFromLocalStorage();
  }


  logout(){
    localStorage.removeItem('Usuario');
    this.h.toggleLogin();
    this.carritoService.clearCart();
  }
  miscompras(){
    this.h.toggleLogin();
  }
}
