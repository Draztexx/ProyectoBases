import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/shared/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Subscription, switchMap } from 'rxjs';


@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css'],
})
export class MostrarProductosComponent implements OnInit {
  listProductos: Producto[] = [];
  categoriaSeleccionada: string = '';
  valorRango: number = 100;

  private categoriaSubscription: Subscription;
  private rangoPrecioSubscription: Subscription;
  private ordenacionSubscription: Subscription;

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

    this.ordenacionSubscription = this._productoService.ordenacion$.subscribe((ordenacion: string) => {
      this.obtenerProductos();
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(params => {
        if (params.searchTerm) {
          return this._productoService.getProductosBySearch(params.searchTerm);
        } else {
          this.categoriaSeleccionada = params.categoria || '';
          return this._productoService.getProductosFiltrados();
        }
      })
    ).subscribe(
      (productos: Producto[]) => {
        this.listProductos = productos;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  obtenerProductos() {
    this._productoService.getProductosFiltrados().subscribe( // Cambio aquí
      (data: Producto[]) => {
        this.listProductos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    this.categoriaSubscription.unsubscribe();
    this.rangoPrecioSubscription.unsubscribe();
    this.ordenacionSubscription.unsubscribe();
  }
}
