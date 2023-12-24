// carrito.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  @Input() isVisible: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();

  finalizarCompra() {
    alert('¡Compra finalizada con éxito!');
  }
}
