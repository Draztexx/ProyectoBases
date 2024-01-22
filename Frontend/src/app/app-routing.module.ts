import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { MostrarProductosComponent } from './components/pages/mostrar-productos/mostrar-productos.component';
import { ProductoPageComponent } from './components/pages/producto-page/producto-page.component';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { FinalizarcompraComponent } from './components/pages/finalizarcompra/finalizarcompra.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ListarComprasComponent } from './components/pages/listar-compras/listar-compras.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios/login', pathMatch: 'full' },
  { path: 'producto', component:MostrarProductosComponent},
  { path: 'search/:searchTerm', component:MostrarProductosComponent},
  { path: 'categoria/:categoria', component: MostrarProductosComponent },
  { path: 'crear-producto', component:CrearProductoComponent},
  { path: 'editar-producto/:id', component:CrearProductoComponent},
  { path: 'producto/:id', component:ProductoPageComponent},
  { path: 'usuarios/login', component:LoginPageComponent,data:{login:true}},
  { path: 'usuarios/register',component:RegisterComponent,data:{register:true}},
  { path: 'finalizarcompra',component:FinalizarcompraComponent},
  { path: 'miscompras',component:ListarComprasComponent},
  { path: 'admin',component: ListarProductosComponent}

 // { path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
