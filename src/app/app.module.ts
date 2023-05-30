import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './shared/services/token-interceptor.service';

import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SpecialEventsPageComponent } from './pages/special-events-page/special-events-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthService } from './shared/services/auth.service';
import { EventService } from './shared/services/event.service';
import { AuthGuard } from './shared/guards/auth.guard';
``

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    EventsPageComponent,
    SpecialEventsPageComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    EventService,
    AuthGuard,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
