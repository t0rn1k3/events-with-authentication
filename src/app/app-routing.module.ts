import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { SpecialEventsPageComponent } from './pages/special-events-page/special-events-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '' , component : HomePageComponent, pathMatch: 'full'},
  { path: 'events' , component : EventsPageComponent},
  { path: 'special' , component : SpecialEventsPageComponent},
  { path: 'register' , component : RegisterPageComponent},
  { path: 'login' , component : LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
