import { Component } from '@angular/core'

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'welcome',
    template: `
    <div class="postCard">

          <h4>Welcome</h4>
          <p>
          Below are some of the latest topics being discussed. Login to let others know your thoughts, 
          or recommend a new topic or venue for discussion. </p>

  </div>
    `
})
export class WelcomeComponent {
    mytitle = 'Welcome'
}
