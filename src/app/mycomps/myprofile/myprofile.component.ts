import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'myprofile',
  templateUrl: './myprofile.component.html'
})
export class MyprofileComponent implements OnInit {

    constructor(private apiService: ApiService, private route: ActivatedRoute) { }

    profile

    ngOnInit() {
      const id = this.route.snapshot.params.id
      // console.log(id)
      this.apiService.getMyprofile(id).subscribe(data => this.profile = data)
  }

}
