import { Component } from '@angular/core'
import { ApiService } from './api.service'

@Component({
    selector: 'welcome',
    template: `
    <mat-card  class="postCard">
      <mat-card-header>
        <mat-card-title>
          <h4>Welcome</h4>
        </mat-card-title>
      </mat-card-header>
  </mat-card>
    `
})
export class WelcomeComponent {
    mytitle = 'Welcome'
}
