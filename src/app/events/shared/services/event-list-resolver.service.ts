import { EventsService } from './events.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventListResolver implements Resolve<any> {

  constructor(
    private eventsService: EventsService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.eventsService.getEvents().pipe(
      map(events => events)
    )
  }

}
