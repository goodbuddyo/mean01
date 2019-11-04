
import { Component } from '@angular/core'
import { ApiService } from '../../api.service'

import { OnInit } from '@angular/core'


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'mypostsubmit',
  template: `
<div>
  <form>
  <div class="form-group">
  <label for="formControlSelect_1">Topic</label>
  <select class="form-control" id="formControlSelect_1"  name="formControlSelect_1" >
    <option>Select a topic</option>
    <option class="dropdown-divider">....</option>
    <option>New Post </option>
    <option>Post Reply</option>
    <option>Venue Reply</option>
    <option>Topics Reply</option>
    <option><span class="rt-arrows"> » </span> Arenas/Stadiums</option>
    <option><span class="rt-arrows"> » </span> Kid Friendly Venues</option>
    <option><span class="rt-arrows"> » </span> Sport Breweries</option>
    <option><span class="rt-arrows"> » </span> Football Feedback</option>
    <option><span class="rt-arrows"> » </span> Baseball Feedback</option>
    <option><span class="rt-arrows"> » </span> Other Sport Feedback</option>
    <option class="dropdown-divider">....</option>
    <option>Site Correction Needed</option>
    <option>Other </option>
    <option class="dropdown-divider">....</option>
  </select>
</div>

<div class="form-group">
  <label for="formControlTextarea_1">Comment</label>
  <textarea [(ngModel)]="postMsg" name="comment" class="form-control" id="formControlTextarea_1" rows="4" placeholder="Post a comment"></textarea>
</div>
<button (click)="post()" class="regButton btn btn-brown shareButton text-center mar12_0_12_0">Submit</button>
</form>
</div>
  `
})
export class MyPostSubmitComponent implements OnInit {
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
