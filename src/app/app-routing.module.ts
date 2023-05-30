import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SpecialEventsPageComponent } from './pages/special-events-page/special-events-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '' , redirectTo: '/events', pathMatch: 'full'},
  { path: 'events' , component : EventsPageComponent},
  { path: 'special' , component : SpecialEventsPageComponent, canActivate : [AuthGuard]},
  {path: 'register', component : RegisterPageComponent},
  { path: 'login' , component : LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
