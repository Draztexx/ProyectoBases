import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';

import  { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  loginForm!:FormGroup;
  isSubmitted=false;
  constructor(private formBuilder:FormBuilder,
              private _usuarioService: UsuarioService,
              private aRouter: Router){}

  

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }

  get fc(){
    return this.loginForm.controls;
  }

  
  submit(){
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
    const usuario = {
      email: this.fc.email.value,
      password: this.fc.password.value
    };
  
    this._usuarioService.login(usuario).subscribe(
      (response) => {
        this.aRouter.navigate(['/producto']);
        this._usuarioService.guardarCookie(response);
        localStorage.setItem('Usuario', JSON.stringify(response));
      },
      (error) => {
        console.error(error);  // Puedes manejar el error del backend aquí
      }
    );
  }


  

 

}
