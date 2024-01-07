import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/shared/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';



@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent implements OnInit{
  
  listProductos: Producto[]=[];

  constructor(private _productoService: ProductoService,private toastr: ToastrService,private router: Router, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this._productoService.getProductosBySearch(params.searchTerm).subscribe(
          (productos: Producto[]) => {
            this.listProductos = productos;
          },
          (error) => {
            console.error(error);
          }
        );
      }else{
        this.obtenerProductos
      }
    });
  }


  ngOnInit(): void {
    this.obtenerProductos();
  }


  obtenerProductos(){
    this._productoService.getProductos().subscribe((data:any) =>{
      console.log(data);
      this.listProductos= data;
    }, (error: any) => {
      console.log(error);
    })
  }


}
