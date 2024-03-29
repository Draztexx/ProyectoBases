import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/shared/models/producto';
import { ProductoService } from 'src/app/services/producto.service';



@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit{
    productoForm: FormGroup;
  titulo='Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute){

                
         
    this.productoForm=this.fb.group({
        producto: ['',Validators.required],
        categoria: ['',Validators.required],
        precio: ['',Validators.required],
        tags: ['',Validators.required],
        url: ['', Validators.required],
        

    })
    this.id=this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    //console.log(this.productoForm);
    //console.log(this.productoForm.get('producto')?.value); 
    const tagsString: string | undefined = this.productoForm.get('tags')?.value;
    const tagsArray: string[] = tagsString ? tagsString.split(',').map(tag => tag.trim()) : [];

    const PRODUCTO: Producto={
      nombre:this.productoForm.get('producto')?.value,
      categoria:this.productoForm.get('categoria')?.value,
      precio:this.productoForm.get('precio')?.value,
      tags:tagsArray,
      url:this.productoForm.get('url')?.value,

    }

    if(this.id!==null){
      //editamos producto
      this._productoService.editarProducto(this.id,PRODUCTO).subscribe(data=>{
        this.toastr.success('El Producto fue Registrado con exito', 'Producto Registrado');
        this.router.navigate(['/admin']);
      })
    }else{
      //agregamos
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        this.toastr.success('El Producto fue Registrado con exito', 'Producto Registrado');
        this.router.navigate(['/admin']);
      }, error=> {
        console.log(error);
        this.productoForm.reset();
      });
    }
    
    
    
    
  }
  
  esEditar(){
    if(this.id !== null){
      this.titulo='Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data=>{
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          precio: data.precio,
          tags: data.tags,
          url: data.url,
          disponible: data.url,
        })
      })
    }
  }
  


}
