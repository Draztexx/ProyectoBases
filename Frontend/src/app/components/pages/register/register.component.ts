// register.component.ts
import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario';
import  { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{ 
  registerForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute){}

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      nombre:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required],
      direccion:['',[Validators.required]],
      tipo:['',[Validators.required]],
    });
  }
  @Output() onLoginClick: EventEmitter<void> = new EventEmitter<void>();

  

  get fc(){
    return this.registerForm.controls;
  }
  submit(){
    if (this.registerForm.invalid) {
      return;
    }
  
    const usuario : Usuario= {
      nombre: this.fc.nombre.value,
      email: this.fc.email.value,
      password: this.fc.password.value,
      direccion: this.fc.direccion.value,
      tipo: this.fc.tipo.value === 'true',
    };
    

    this._usuarioService.register(usuario).subscribe(
      (response) => {
        this._usuarioService.guardarCookie(response);
        localStorage.setItem('Usuario', JSON.stringify(response));
      },
      (error) => {
        console.error(error);  // Puedes manejar el error del backend aquí
      }
    );
  }
}
