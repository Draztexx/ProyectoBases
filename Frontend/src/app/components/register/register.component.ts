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
      passwordhash:['',Validators.required],
      direccion:['',[Validators.required]],
      tipo:['',[Validators.required]],
    });
  }
  @Output() onLoginClick: EventEmitter<void> = new EventEmitter<void>();

  loginClick() {
    this.onLoginClick.emit();
  }

  get fc(){
    return this.registerForm.controls;
  }
  submit(){
    
    if (this.registerForm.invalid) {
      return;
    }
  }
}
