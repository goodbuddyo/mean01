import { Component } from '@angular/core'
import { AuthService } from './auth.service'


@Component({
  selector: 'app-root',
  template: `

<div class="container">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand"  routerLink="/"  style="">SportFans.US</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-expanded="false" >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">

    <li class="nav-item">
      <a class="nav-link"  routerLink="/venues" style="">Venues</a>
    </li>
    <li class="nav-item">
      <a class="nav-link"  routerLink="/users"  style="">Fans</a>
    </li>
    <li class="nav-item">
      <a class="nav-link"   routerLink="/posts"  style="">Posts</a>
    </li>



    <span style="flex: 1 1 auto"></span>

    <li class="nav-item">
      <a class="nav-link" *ngIf="!authService?.isAuthenticated"  routerLink="/register"  style="">Register</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" *ngIf="!authService?.isAuthenticated"  routerLink="/login" style="">Login</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" *ngIf="!!authService?.isAuthenticated" (click)="authService.logout()"  style="">Logout</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" (click)="authService.testFunction()"  style="cursor: pointer">test</a>
    </li>

    </ul>

  </div>
</nav>

<router-outlet></router-outlet>

</div>
  `

})
export class AppComponent {
  constructor( public authService: AuthService) { }
}
