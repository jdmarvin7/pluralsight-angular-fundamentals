import { EventsService } from './shared/services/events.service';
import { IEvent } from './shared/event.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  templateUrl: './create-event.component.html',
  styles: [`
  .error: {  }
  `]
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;
  newEvent: any;


  ngOnInit() {

  }

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private eventService: EventsService
  ) {}

  cancel() {
    this.router.navigate(['/events'])
  }

  saveEvent(value: any) {
    this.eventService.saveEvent(value)
    this.isDirty = false;
    this.router.navigate(['/events'])
  }
}
