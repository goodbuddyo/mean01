import { Component } from '@angular/core'
import { AuthService } from './auth.service'


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  template: `
  <div class="regCard">
  <h5 class="regH5">Login</h5>
  <form>
   <div class="form-group">
   <label for="inputEmail_2">Email address</label>
   <input [(ngModel)]="loginData.email" name="email" class="form-control" id="inputEmail_2"
    aria-describedby="emailHelp" placeholder="Enter email"  autocomplete="on">
   <small id="emailHelp" class="form-text text-muted">We do not share your email with anyone else.</small>
 </div>
 <div class="form-group">
   <label for="inputPassword_2">Password</label>
   <input [(ngModel)]="loginData.pwd" name="password" type="password" class="form-control" id="inputPassword_2"
   placeholder="Password" autocomplete="off">
 </div>
  <br>
    <button (click)="post()" class="regButton btn btn-primary">Login</button>
  </form>

  </div>
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
