import { Component } from '@angular/core'
import { AuthService } from './auth.service'
// import { ApiService } from './api.service'

@Component({
  selector: 'register',
  template: `
  <mat-card class="regCard">
  <mat-card-title  class="regTitle"><h5 class="regH5">Register New User</h5> </mat-card-title>
  <mat-card-content>
    <form class="example-form">
    <mat-form-field class="example-half-width">
      <input [(ngModel)]="registerData.email" name="email" matInput placeholder="email" type="email">
    </mat-form-field>
    <mat-form-field  class="example-half-width">
      <input [(ngModel)]="registerData.pwd" name="password"  matInput  placeholder="password" type="password">
    </mat-form-field>
    <br>
    <mat-form-field  class="example-half-width">
      <input [(ngModel)]="registerData.name" name="name"  matInput  placeholder="name">
    </mat-form-field>
  <br>
  <mat-form-field class="example-full-width">
    <textarea [(ngModel)]="registerData.description" name="description"  matInput  placeholder="description"></textarea>
  </mat-form-field>
<br>
    <button (click)="post()" mat-raised-button class="regButton" color="primary">Register</button>
    </form>
  </mat-card-content>
</mat-card>
  `
  // templateUrl:'register.component.html'
})
export class RegisterComponent {
  public registerData = {
    email: '',
    pwd: '',
    name: '',
    description: ''
  }

  constructor(private authService: AuthService) { }

  post() {
      console.log(this.registerData)
      // this.apiService.sendUserRegistration(this.registerData)
      this.authService.registerUser(this.registerData)
  }
}




// <mat-form-field>
// <textarea  placeholder="Textarea" name="textarea01" matInput placeholder="text" type="text"></textarea>
// </mat-form-field>
