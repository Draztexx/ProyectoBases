import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { LatizquierdoComponent } from './components/latizquierdo/latizquierdo.component';
import { HttpClientModule } from '@angular/common/http';
import { MostrarProductosComponent } from './components/pages/mostrar-productos/mostrar-productos.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/partials/search/search.component';
import { ProductoPageComponent } from './components/pages/producto-page/producto-page.component';
import { LatderechoComponent } from './components/latderecho/latderecho.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarProductosComponent,
    CrearProductoComponent,
    ListarProductosComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CarritoComponent,
    LatizquierdoComponent,
    SearchComponent,
    ProductoPageComponent,
    LatderechoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
