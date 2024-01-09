// latizquierdo.component.ts

import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-latizquierdo',
  templateUrl: './latizquierdo.component.html',
  styleUrls: ['./latizquierdo.component.css'],
})
export class LatizquierdoComponent {
  valorRango: number = 50;

  constructor(private _productoService: ProductoService) {}

  actualizarValorPrecio() {
    this._productoService.setRangoPrecio(this.valorRango);
  }

  filtrarPorCategoria(categoria: string) {
    this._productoService.setCategoriaSeleccionada(categoria);
  }

  mostrarTodos() {
    this._productoService.setCategoriaSeleccionada('');
  }
}
