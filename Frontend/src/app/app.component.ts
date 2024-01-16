import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLoginPageComponent = false;
  isRegisterComponent = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica si la ruta actual tiene la propiedad data.login como verdadera
        this.isLoginPageComponent = this.router.routerState.snapshot.root.firstChild?.data?.login === true;
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Verifica si la ruta actual tiene la propiedad data.login como verdadera
        this.isRegisterComponent = this.router.routerState.snapshot.root.firstChild?.data?.register === true;
      }
    });
  }
  title = 'Frontend';
}
