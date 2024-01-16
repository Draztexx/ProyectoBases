import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/models/usuario';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient, HttpClientModule,HttpResponse  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost:4000/api/usuarios/login'
  private usuarioSubject = new BehaviorSubject<Usuario>(new Usuario()); 
  public usuariObservable:Observable<Usuario>;
  constructor(private http:HttpClient) { 
    this.usuariObservable=this.usuarioSubject.asObservable();

  }

  login(usuario: IUserLogin): Observable<Usuario> {
    // Corrige la URL y agrega el usuario al cuerpo de la solicitud
    return this.http.post<Usuario>(this.url,usuario);
  }

  guardarCookie(response: any) {
    console.log('Respuesta completa:', response);

    console.log('Respuesta completa:', response);

  // Verifica si la respuesta tiene la propiedad "token"
  if (response.token) {
    const token = response.token;

    // Configura la cookie en el cliente
    document.cookie = `sesion=${token}; SameSite=None; Secure`;
    console.log('Cookie guardada:', token);
  } else {
    console.error('La respuesta no contiene el token.');
  }
  }

}
