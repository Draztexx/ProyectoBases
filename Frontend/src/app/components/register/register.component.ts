// register.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() onLoginClick: EventEmitter<void> = new EventEmitter<void>();

  loginClick() {
    this.onLoginClick.emit();
  }

  register() {
    console.log('Registrarse...');
  }
}
