import { Component } from '@angular/core'
import { AuthService } from './auth.service'
// import { ApiService } from './api.service'

@Component({
  selector: 'login',
  template: `
  <mat-card class="regCard">
  <mat-card-title  class="regTitle"><h5 class="regH5">Login</h5> </mat-card-title>
  <mat-card-content>
  <form>
  <mat-form-field>
    <input [(ngModel)]="loginData.email" name="email" matInput placeholder="email" type="email">
  </mat-form-field>
  <mat-form-field>
   <input [(ngModel)]="loginData.pwd"  name="password"  matInput  placeholder="password" type="password">
  </mat-form-field>
  <button (click)="post()" mat-raised-button class="regButton" color="primary">Login</button>
  </form>
  </mat-card-content>
  </mat-card>
  `
})
export class LoginComponent {
  public loginData = {
    email: '',
    pwd: ''
  }
  constructor(private authService: AuthService) { }
  post() {
      this.authService.loginUser(this.loginData)
  }
}
