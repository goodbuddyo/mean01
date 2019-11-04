import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
// import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { AuthInterceptorService } from './authInterceptor.service'

import { NgbdCollapseBasic } from './mycomps/shared/collapse-basic'
import { MyWelcomeComponent } from './mycomps/welcome/mywelcome.component'
import { MyAccordion01 } from './mycomps/welcome/myaccordion01.component'
import { MyAccordion02 } from './mycomps/welcome/myaccordion02.component'
import { MyAccordion03 } from './mycomps/welcome/myaccordion03.component'

import { NgbdTableComplete } from './mycomps/table05/table-complete'
import { NgbdSortableHeader } from './mycomps/table05/sortable.directive'
import { NgbdTableVenueComplete } from './mycomps/myvenues/table-v-complete'
import { NgbdSortableVenueHeader } from './mycomps/myvenues/sortable.venue.directive'

import { MyvenuesComponent } from './mycomps/myvenues/myvenues.component'
import { MymessagesComponent } from './mycomps/myposts/mymessages.component'
import { MypostsComponent } from './mycomps/myposts/myposts.component'
import { MyPostSubmitComponent } from './mycomps/myposts/mypostsubmit.component'
import { MyfansComponent } from './mycomps/myfans/myfans.component'
import { MyloginComponent } from './mycomps/mylogin/mylogin.component'
import { MyregisterComponent } from './mycomps/myregister/myregister.component'
import { MyprofileComponent } from './mycomps/myprofile/myprofile.component'
import { MytruncatePipe } from './mycomps/myshared/mytruncate.pipe';

const routes = [

  { path: 'mywelcome', component: MyWelcomeComponent },
  { path: 'myposts', component: MypostsComponent },
  { path: 'myvenues', component: MyvenuesComponent },
  { path: 'myfans', component: MyfansComponent },
  { path: 'mylogin', component: MyloginComponent },
  { path: 'myregister', component: MyregisterComponent },
  { path: 'myprofile/:id', component: MyprofileComponent },

  { path: '', component: MyWelcomeComponent }

]

@NgModule({
  declarations: [
    AppComponent, 

    MyWelcomeComponent, NgbdCollapseBasic, 
    MyAccordion01, MyAccordion02, MyAccordion03,
    NgbdTableComplete, NgbdSortableHeader, 
    NgbdSortableVenueHeader, NgbdTableVenueComplete,
    MymessagesComponent,
    MypostsComponent, MyPostSubmitComponent, MyvenuesComponent, 
    MyfansComponent,
    MyloginComponent, MyregisterComponent, MyprofileComponent,
    MytruncatePipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, 
    BrowserAnimationsModule, NgbModule,  
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
//  HttpModule,
