// producto.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { Producto } from '../shared/models/producto';
import { map, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class ProductoService {
  url = 'http://localhost:4000/api/productos/';
  private categoriaSeleccionadaSubject = new BehaviorSubject<string>('');
  categoriaSeleccionada$ = this.categoriaSeleccionadaSubject.asObservable();

  private rangoPrecioSubject = new BehaviorSubject<number>(100);
  rangoPrecio$ = this.rangoPrecioSubject.asObservable();


  constructor(private http: HttpClient,private router: Router) {}

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(`${this.url}${id}`);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}${id}`);
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(`${this.url}${id}`, producto);
  }

  getProductosBySearch(searchTerm: string): Observable<any> {
    return this.getProductos().pipe(
      map((productos: Producto[]) =>
        productos.filter(producto =>
          producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  getProductosByCategoria(categoria: string): Observable<Producto[]> {
    if (categoria === '') {
      return this.getProductos()
    }else{
      return this.getProductos().pipe(
        map((productos: Producto[]) =>
          productos.filter(producto =>
            producto.categoria.toLowerCase()==(categoria.toLowerCase())
          )
        )
      );
    }
  }


  getProductosByRangoPrecio(n:number): Observable<Producto[]> {
    return this.rangoPrecio$.pipe(
      switchMap(max =>
        this.getProductos().pipe(
          map((productos: Producto[]) =>
            productos.filter(producto => producto.precio < max)
          )
        )
      )
    );
  }
  setCategoriaSeleccionada(categoria: string) {
    this.categoriaSeleccionadaSubject.next(categoria);
  }

  setRangoPrecio(rangoPrecio: number) {
    this.rangoPrecioSubject.next(rangoPrecio);
  }

  private ordenacionSubject = new BehaviorSubject<string>('asc');
ordenacion$ = this.ordenacionSubject.asObservable();

setOrdenacion(ordenacion: string) {
  this.ordenacionSubject.next(ordenacion);
}

getProductosFiltrados(): Observable<Producto[]> {
  return combineLatest([this.getProductos(), this.categoriaSeleccionada$, this.rangoPrecio$, this.ordenacion$]).pipe(
    map(([productos, categoria, rangoPrecio, ordenacion]) => {
      let productosFiltrados = [...productos];
      if (categoria) {
        productosFiltrados = productosFiltrados.filter(producto =>
          producto.categoria.toLowerCase() === categoria.toLowerCase()
        );
      }

      if (rangoPrecio) {
        productosFiltrados = productosFiltrados.filter(producto =>
          producto.precio <= rangoPrecio
        );
      }

      productosFiltrados.sort((a: any, b: any) => {
        if (ordenacion === 'asc') {
          return a.nombre.localeCompare(b.nombre);
        } else if (ordenacion === 'desc') {
          return b.nombre.localeCompare(a.nombre);
        }
        return 0;
      });

      return productosFiltrados;
    })
  );
}

}
