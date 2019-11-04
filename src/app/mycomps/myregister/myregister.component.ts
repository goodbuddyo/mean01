import { Component } from '@angular/core'
import { AuthService } from '../../auth.service'


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'register',
  templateUrl: './myregister.component.html'

})
export class MyregisterComponent {
  public registerData = {
    email: '',
    pwd: '',
    name: '',
    description: ''
  }

  constructor(private authService: AuthService) { }

  post() {
      // console.log(this.registerData)
      this.authService.registerUser(this.registerData)
  }
}
