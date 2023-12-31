import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() onRegisterClick: EventEmitter<void> = new EventEmitter<void>();
  username: string = '';
  password: string = '';

  login() {

    
  }
  registerClick() {
    this.onRegisterClick.emit();
  }
}
