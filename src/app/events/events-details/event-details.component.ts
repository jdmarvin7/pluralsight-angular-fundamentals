import { IEvent, ISession } from './../shared/event.model';
import { EventsService } from './../shared/services/events.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image: { height: 100px; }
    a { cursor: pointer }
  `]
})
export class EventDetailsComponent implements OnInit {
  event!: IEvent;
  addMode: boolean = false;
  filterBy: string = 'all';
  sortBy!: string;

  constructor(
    private service: EventsService,
    private route: ActivatedRoute
  ) {  }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.event = this.service.getEventById(Number(id)) as IEvent;

    console.log(this.event, '\n',typeof id);

  }

  addSession() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id - nextId + 1;
    this.event.sessions.push(session);
    this.service.updateEvent(this.event.id);
    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = !this.addMode;
  }
}
