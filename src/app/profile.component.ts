import { Component, OnInit } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'profile',
  template: `
  <div class="postCard">
    <h5 class="regH5">Profile</h5>  

    <div class="card-content">
    <div class="card-content">Name: {{profile?.name}}</div>
    <div class="card-content">Email: {{profile?.email}}</div>
    <div class="card-content">Details: {{profile?.description}}</div>
  </div>


  
  <div class="postCard">
    <h5 class="regH5">Posts</h5> 
  
    <div class="card-content">

      <messages></messages>

    </div>
  </div>
  `
})
export class ProfileComponent implements OnInit {

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    profile

    ngOnInit() {
      const id = this.route.snapshot.params.id
      // console.log(id)
      this.apiService.getProfile(id).subscribe(data => this.profile = data)
  }

}
