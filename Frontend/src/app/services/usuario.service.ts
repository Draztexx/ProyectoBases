import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/models/usuario';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioSubject = new BehaviorSubject<Usuario>(new Usuario()); 
  public usuariObservable:Observable<Usuario>;
  constructor(private http:HttpClient) { 
    this.usuariObservable=this.usuarioSubject.asObservable();

  }
/*
  login(userLogin:IUserLogin):Observable<Usuario>{
    this.http.post<Usuario>()
  }
*/


}
