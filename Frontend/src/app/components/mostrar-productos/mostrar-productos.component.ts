import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-mostrar-productos',
  templateUrl: './mostrar-productos.component.html',
  styleUrls: ['./mostrar-productos.component.css']
})
export class MostrarProductosComponent {
  
  listProductos: Producto[]=[];

  constructor(private _productoService: ProductoService,private toastr: ToastrService,private router: Router){}


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

  eliminarProducto(id: any){
    this._productoService.eliminarProducto(id).subscribe(data=>{
      this.toastr.error('El producto ha sido eliminado con exito','Producto Eliminado');
      this.obtenerProductos();
    },error=>{console.log(error);
  })
  }

  irACrearProducto() {
    this.router.navigate(['/crear-producto']);
  }

}
