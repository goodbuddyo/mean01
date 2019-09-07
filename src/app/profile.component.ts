import { Component } from '@angular/core'
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'profile',
  template: `
  <mat-card class="regCard">
  <mat-card-title  class="regTitle"><h5 class="regH5">Profile</h5> </mat-card-title>
  <mat-card-content>

  <mat-list role="list">
    <mat-list-item role="listitem">Name: {{profile?.name}}</mat-list-item>
    <mat-list-item role="listitem">Details: {{profile?.description}}</mat-list-item>

  </mat-list>

  </mat-card-content>
  </mat-card>


  <mat-card class="regCard">
  <mat-card-title  class="regTitle"><h5 class="regH5">Posts</h5> </mat-card-title>
  <mat-card-content>

    <messages></messages>

  </mat-card-content>
  </mat-card>


  `
})
export class ProfileComponent {

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    profile

    ngOnInit() {
      let id = this.route.snapshot.params.id
      // console.log(id)
      this.apiService.getProfile(id).subscribe(data => this.profile = data)
      // this.apiService.getProfile(id).subscribe(profile => console.log(profile.json()) )
  }

}
