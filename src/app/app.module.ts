import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
// import { HttpModule } from '@angular/http'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule} from '@angular/material/checkbox'
import { MatButtonModule} from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'

import { AppComponent } from './app.component'
import { ApiService } from './api.service'
import { AuthService } from './auth.service'
import { MessagesComponent } from './messages.component'
import { RegisterComponent } from './register.component'
import { UsersComponent } from './users.component'
import { WelcomeComponent } from './welcome.component'
import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'
import { PostComponent } from './post.component'
import { AuthInterceptorService } from './authInterceptor.service'

const routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostComponent },
  { path: '', component: WelcomeComponent },
  { path: 'profile/:id', component: ProfileComponent }
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, RegisterComponent,
    UsersComponent, WelcomeComponent,
    LoginComponent, ProfileComponent, PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, BrowserAnimationsModule, RouterModule.forRoot(routes),
    MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatListModule,
    MatToolbarModule, MatInputModule
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
