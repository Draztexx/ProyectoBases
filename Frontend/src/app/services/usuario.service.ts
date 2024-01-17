import { IUserLogin } from './../shared/interfaces/IUserLogin';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../shared/models/usuario';
import { HttpClient, HttpClientModule,HttpResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url='http://localhost:4000/api/usuarios/login'
  private usuarioSubject = new BehaviorSubject<Usuario>(new Usuario());
  public usuariObservable:Observable<Usuario>;
  constructor(private http:HttpClient,private router: Router) {
    this.usuariObservable=this.usuarioSubject.asObservable();

  }

  login(usuario: IUserLogin): Observable<Usuario> {
    // Corrige la URL y agrega el usuario al cuerpo de la solicitud
    return this.http.post<Usuario>(this.url,usuario);
  }


  register(usuario: Usuario): Observable<Usuario> {
    // Corrige la URL y agrega el usuario al cuerpo de la solicitud
    return this.http.post<Usuario>('http://localhost:4000/api/usuarios/register', usuario)
      .pipe(
        tap(() => {

          this.router.navigate(['/usuarios/login']);
        })
      );
  }

  guardarCookie(response: any) {
    console.log('Respuesta completa:', response);

    console.log('Respuesta completa:', response);

  if (response.token) {
    const token = response.token;

    document.cookie = `sesion=${token}; SameSite=None; Secure`;
    console.log('Cookie guardada:', token);
  } else {
    console.error('La respuesta no contiene el token.');
  }
  }

  getUsuarioFromLocalStorage():Usuario{
    const usuarioJson=localStorage.getItem("Usuario")
    console.log(usuarioJson)
    return usuarioJson? JSON.parse(usuarioJson):new Usuario();

  }

}
