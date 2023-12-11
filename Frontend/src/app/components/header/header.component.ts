import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showLogin: boolean = false;
  showRegister: boolean = false;

  toggleLogin() {
    this.showLogin = !this.showLogin;
    if(this.showRegister==true){
      this.showRegister=false;
    }
  }

  onRegisterClick() {
    this.showRegister = true;
    this.showLogin = false;
  }

  onLoginClick() {
    this.showLogin = true;
    this.showRegister = false;
  }
}
