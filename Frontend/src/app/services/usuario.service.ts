import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/models/usuario';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost:4000/api/usuarios/'
  private usuarioSubject = new BehaviorSubject<Usuario>(new Usuario()); 
  public usuariObservable:Observable<Usuario>;
  constructor(private http:HttpClient) { 
    this.usuariObservable=this.usuarioSubject.asObservable();

  }

  login(usuario: Usuario):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}${usuario}`);
  }



}
