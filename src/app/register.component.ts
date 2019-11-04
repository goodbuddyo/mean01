import { Component } from '@angular/core'
import { AuthService } from './auth.service'


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'register',
  template: `

  <div class="">

    <div  class="regTitle"><h5 class="regH5">Register New User</h5> </div>

    <form class="example-form">

    <div class="form-group">
      <label for="inputEmail_1">Email address</label>
      <input [(ngModel)]="registerData.email" name="email" class="form-control" id="inputEmail_1"
       aria-describedby="emailHelp" placeholder="Enter email"  autocomplete="on">
      <small id="emailHelp" class="form-text text-muted">We do not share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="inputPassword_1">Password</label>
      <input [(ngModel)]="registerData.pwd" name="password" type="password" class="form-control" id="inputPassword_1"
      placeholder="Password"  autocomplete="off">
    </div>

    <br>

    <div class="form-group">
      <label for="userName_1">User Name</label>
      <input [(ngModel)]="registerData.name" name="name"  class="form-control" id="userName_1"
      aria-describedby="usernameHelp" placeholder="User Name">
      <small id="emailHelp" class="form-text text-muted">Go ahead, be creative</small>
    </div>

    <br>
      <button (click)="post()" class="regButton btn btn-primary">Submit</button>
      </form>
  </div>
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
      this.authService.registerUser(this.registerData)
  }
}





