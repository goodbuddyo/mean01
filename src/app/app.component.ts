import { Component } from '@angular/core'
import { AuthService } from './auth.service'


@Component({
  selector: 'app-root',
  template: `

<nav class="navbar navbar-expand-md navbar-dark bg-darkBrown">
<div class="container navContainer flex-center">
  <a class="navbar-brand" routerLink="/mywelcome" style="">SPORTFANS.US</a>
  <button class="navbar-toggler" type="button" (click)="toggleNavbar()"   
   aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" [ngClass]="{ 'show': navbarOpen }">
    <ul class="navbar-nav mr-auto">

    <li class="nav-item">
    <a class="nav-link"  routerLink="/myvenues" style="">Venues</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link"   routerLink="/myposts"  style="">Comments</a>
    </li>
    
    <li class="nav-item">
    <a class="nav-link"  routerLink="/myfans" style="">Fans</a>    
    </li>


    </ul>

  <button class="btn btn-warning my-2 my-sm-0" *ngIf="!authService?.isAuthenticated"  routerLink="/myregister"  style="">Myregister</button>
  <button class="btn btn-warning my-2 my-sm-0" *ngIf="!authService?.isAuthenticated"  routerLink="/mylogin" style="">Mylogin</button>
  <button class="btn btn-warning my-2 my-sm-0" *ngIf="!!authService?.isAuthenticated" (click)="authService.logout()"  style="">Logout</button>

  </div>
</div>
</nav>

<main class="container sfusContainer flex-center ">
<div class="container sfus">
  <router-outlet></router-outlet>
</div>
</main>

<footer class="footer bg-darkBrown">
  <nav class="navigation" aria-label="site">
    <ul>
    <li class="footerli "> <a class="nav-link"  routerLink="/mywelcome">Home</a> </li>
    <li class="footerli "> <a class="nav-link" routerLink="/myvenues">Venue List </a> </li>
    <li class="footerli "> <a class="nav-link" routerLink="/myposts" >Comments</a>     </li>
    <li class="footerli "> <a class="nav-link" routerLink="/myfans">Fans</a> </li>
    <li class="footerli "> <a class="nav-link" routerLink="/p03-list">P3</a> </li>
    <li class="footerli "> <a class="nav-link" routerLink="/mywelcome">About</a> </li>
   
    </ul>
  </nav>
  <p class="footerPar">SPORTFANS.US - Copyright 2019</p>
  <p class="footerPar">Photo Credit Eric Tompkins Unsplash. Music credit Bensound.com.</p>

</footer>
  `
  // <a class="nav-link"  routerLink="/users"  style="">Users</a>
})
export class AppComponent {
  constructor( public authService: AuthService) { }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
}
