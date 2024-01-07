import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { MostrarProductosComponent } from './components/pages/mostrar-productos/mostrar-productos.component'; 
import { ProductoPageComponent } from './components/pages/producto-page/producto-page.component';

const routes: Routes = [
 // { path: '', component: ListarProductosComponent},
  { path: '', component: MostrarProductosComponent}, 
  { path: 'search/:searchTerm', component:MostrarProductosComponent},
  { path: 'crear-producto', component:CrearProductoComponent},
  { path: 'editar-producto/:id', component:CrearProductoComponent},
  { path: 'producto/:id', component:ProductoPageComponent},
 // { path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
