import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../shared/models/producto';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-producto-page',
  templateUrl: './producto-page.component.html',
  styleUrls: ['./producto-page.component.css']
})
export class ProductoPageComponent implements OnInit{

  producto?: Producto;

  constructor(private activatedRoute:ActivatedRoute,private productoService:ProductoService){
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      if (params.id) {
        this.productoService.obtenerProducto(params.id).subscribe(
          (producto: Producto) => {
            this.producto = producto;
          },
          (error) => {
            console.error(error);
          }
        );
      }
    })
  }

}
