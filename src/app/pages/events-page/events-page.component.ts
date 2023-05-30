import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  events = []

  constructor(
    private eventService : EventService
  ){}

  ngOnInit(): void {
    this.eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )
  }
}
