import { Component } from '@angular/core'
import { AuthService } from '../../auth.service'


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './mylogin.component.html'

})
export class MyloginComponent {
  public loginData = {
    email: '',
    pwd: ''
  }
  constructor(private authService: AuthService) { }
  post() {
      this.authService.loginUser(this.loginData)
  }
}

