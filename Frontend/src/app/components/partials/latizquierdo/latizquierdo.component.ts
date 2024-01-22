import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/shared/models/producto';

@Component({
  selector: 'app-latizquierdo',
  templateUrl: './latizquierdo.component.html',
  styleUrls: ['./latizquierdo.component.css'],
})
export class LatizquierdoComponent implements OnInit {
  valorRango: number = 100;
  listProductos: Producto[] = [];
  listCategorias: string[] = [];

  constructor(private _productoService: ProductoService) {}

  ngOnInit() {
    this.actualizarProductos();
    this.obtenerCategorias();
  }

  actualizarValorPrecio() {
    this._productoService.setRangoPrecio(this.valorRango);
    this.actualizarProductos();
  }

  filtrarPorCategoria(categoria: string) {
    this._productoService.setCategoriaSeleccionada(categoria);
    this.actualizarProductos();
  }

  mostrarTodos() {
    this._productoService.setCategoriaSeleccionada('');
    this.actualizarProductos();
  }

  cambiarOrdenacion(ordenacion: string) {
    this._productoService.setOrdenacion(ordenacion);
    this.actualizarProductos();
  }

  private actualizarProductos() {
    this._productoService.getProductosFiltrados().subscribe(
      (data: Producto[]) => {
        this.listProductos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }


  private obtenerCategorias() {
    this._productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.listProductos = data;
        this.listCategorias = Array.from(new Set(this.listProductos.map(producto => producto.categoria)));
      },
      (error: any) => {
        console.log(error);
      }
    );

  }
}
