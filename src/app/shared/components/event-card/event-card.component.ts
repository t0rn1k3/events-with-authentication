import { Component , Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {

  constructor(
    public routerLink : Router
  ){}

  @Input() events :any;

  today: number = Date.now();

}
