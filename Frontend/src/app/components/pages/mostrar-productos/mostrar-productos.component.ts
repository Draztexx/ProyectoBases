import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/shared/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css'],
})
export class MostrarProductosComponent implements OnInit {
  listProductos: Producto[] = [];
  categoriaSeleccionada: string = '';
  valorRango: number = 50;

  private categoriaSubscription: Subscription;
  private rangoPrecioSubscription: Subscription;

  constructor(
    private _productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoriaSubscription = this._productoService.categoriaSeleccionada$.subscribe((categoria: string) => {
      this.categoriaSeleccionada = categoria;
      this.obtenerProductos();
    });

    this.rangoPrecioSubscription = this._productoService.rangoPrecio$.subscribe((rangoPrecio: number) => {
      this.valorRango = rangoPrecio;
      this.obtenerProductos();
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this._productoService.getProductosBySearch(params.searchTerm).subscribe(
          (productos: Producto[]) => {
            this.listProductos = productos;
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        this.categoriaSeleccionada = params.categoria || '';
        this.obtenerProductos();
      }
    });
  }

  obtenerProductos() {
    this._productoService.getProductosByCategoria(this.categoriaSeleccionada).subscribe(
      (data: Producto[]) => {
        this.listProductos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  actualizarValorPrecio() {
    this.obtenerProductos();
  }

  ngOnDestroy() {

    this.categoriaSubscription.unsubscribe();
    this.rangoPrecioSubscription.unsubscribe();
  }
}
