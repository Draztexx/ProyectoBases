import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/shared/models/producto';

@Component({
  selector: 'app-latderecho',
  templateUrl: './latderecho.component.html',
  styleUrls: ['./latderecho.component.css']
})
export class LatderechoComponent {
  listProductos: Producto[] = [];
  novedades: Producto[] = [];

  constructor(private _productoService: ProductoService, private router: Router) {
    this.actualizarProductos();
  }

  actualizarProductos() {
    this._productoService.getProductos().subscribe(
      (data: Producto[]) => {
        this.listProductos = data;
        this.novedades = this.listProductos.slice().reverse().slice(0, 2);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
