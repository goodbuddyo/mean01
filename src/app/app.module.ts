import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
// import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'



import { AppComponent } from './app.component'
import { WelcomeComponent } from './welcome.component'
import { TopicsComponent } from './topics.component'
import { VenuesComponent } from './venues.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { UsersComponent } from './users.component'
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'
import { AuthInterceptorService } from './authInterceptor.service'

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'venues', component: VenuesComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '', component: WelcomeComponent },
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent,
    UsersComponent, WelcomeComponent, TopicsComponent, VenuesComponent,
    LoginComponent, ProfileComponent, PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
//  HttpModule,
