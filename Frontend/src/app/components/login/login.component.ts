import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() isVisible: boolean = false;  // Asegúrate de que coincida con el nombre en header.component.html
  @Output() onRegisterClick: EventEmitter<void> = new EventEmitter<void>();
  username: string = '';
  password: string = '';

  login() {
    console.log('Iniciar Sesión', this.username, this.password);
  }
  registerClick() {
    this.onRegisterClick.emit();
  }
}
