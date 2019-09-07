import { Component } from '@angular/core'
import { AuthService } from './auth.service'
// import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
  <mat-toolbar>
    <button mat-raised-button routerLink="/" style="">Moo-Zik</button>
    <button mat-raised-button routerLink="/users" style="margin-left: 10px;">Users</button>
    <button mat-raised-button routerLink="/posts" style="margin-left: 10px;">Posts</button>
    <span style="flex: 1 1 auto"></span>
    <button mat-raised-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
    <button mat-raised-button *ngIf="!authService.isAuthenticated" routerLink="/login" style="margin-left: 10px;">Login</button>
    <button mat-raised-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
  </mat-toolbar>
  <router-outlet></router-outlet>
  `

})
export class AppComponent {
  constructor( public authService: AuthService) { }
}
