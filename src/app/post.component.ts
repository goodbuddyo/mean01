import { Component } from '@angular/core'
import { ApiService } from './api.service'

import { OnInit } from '@angular/core'


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'post',
    template: `
 <div  class="postCard">
    <h4>New Post</h4>

    <form>
    <div class="form-group">
      <label for="formControlTextarea_1">Post a Comment</label>
      <textarea [(ngModel)]="postMsg" name="description" class="form-control" id="formControlTextarea_1" rows="3" placeholder="Post a Comment"></textarea>
    </div>

    <div class="form-group">
      <label for="formControlSelect_1">Topic</label>
      <select class="form-control" id="formControlSelect_1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

    <br>
    <button (click)="post()" class="regButton btn btn-primary">Submit</button>
    </form>

  </div>

  <div  class="postCard">
  <h4>View Posts</h4>
    <div *ngFor="let message of apiService.messages">
      <span> Topic: Venue Info. Region: CT-SW.</span>
      <span> Post: {{message.msg}} </span>
    </div>

  </div>

    `
})
export class PostComponent implements OnInit {
    constructor(private apiService: ApiService) { }
    postMsg = ''

    post() {
      // console.log(this.postMsg)
        this.apiService.postMessage({msg: this.postMsg})
    }

    ngOnInit() {
      this.apiService.getAllMessages()
    }
}
