import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { ApiService } from './api.service'
import { OnInit } from '@angular/core'

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'messages',
    template: `
        <div *ngFor="let message of apiService.messages">
          <mat-card>{{message.msg}}</mat-card>
        </div>
    `
})
export class MessagesComponent implements OnInit {
    constructor( public apiService: ApiService, private route: ActivatedRoute) { }

    ngOnInit() {
      const userId = this.route.snapshot.params.id
      this.apiService.getMessages(userId)
    }
}
