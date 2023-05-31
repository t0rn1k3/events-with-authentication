import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
    declarations: [
    HeaderComponent,
    EventCardComponent,
    InputComponent,
    ButtonComponent,
  ],
    imports: [
      RouterModule, 
      ReactiveFormsModule,
      FormsModule,
      BrowserModule,
      CommonModule
    ],
    exports: [
      HeaderComponent,
      EventCardComponent,
      ButtonComponent,
      InputComponent
    ],

    providers: []

})

export class SharedModule{}