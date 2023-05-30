import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-special-events-page',
  templateUrl: './special-events-page.component.html',
  styleUrls: ['./special-events-page.component.scss']
})
export class SpecialEventsPageComponent implements OnInit {

  specialEvents = []

  constructor(
    private  eventService : EventService 
  ){}

  ngOnInit(): void {
    this.eventService.getSpecialEvents()
      .subscribe(
        res => this.specialEvents = res,
        err => console.log(err)
      )
  }

}
