import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from './shared/services/events.service';
import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="row">
        <div class="col-md-8">
          <event-thumbnail #thumbnail [routerLink]="['/events', event.id]" (click)="handleThumbnailCLik(event.name)" *ngFor="let event of events" [event]="event" (eventClick)="handleEventCLicked($event)"></event-thumbnail>
          <button class="btn btn-danger mt-2">
            Log me some foo
          </button>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">Anúncios</div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor(
    private service: EventsService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.service.getEvents().subscribe(events => {
      this.events = events
    })
    console.log(this.route.snapshot.data);

    // this.events = this.route.snapshot.data['events']

  }
  handleEventCLicked(event: any): void {
    console.log(event);
  }

  logFoo() {
    console.log('foo');
  }

  handleThumbnailCLik(eventName: string): void {
    this.toastr.success(eventName)
  }
}
