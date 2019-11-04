import { Component, OnInit } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'users',
    template: `
        <div class="postCard">
          <h4>Fans</h4>
        </div>
      <div *ngFor="let user of apiService.users">
        <a [routerLink]="['/profile', user._id]" style="cursor: pointer">
        {{user.name}}</a>
      </div>
    `
})
export class UsersComponent implements OnInit {
    constructor(public apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getUsers()
    }
}
