import { EventsService } from './../shared/services/events.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(
    private eventService: EventsService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const eventExists = !!this.eventService.getEventById(+route.params['id']);

    if(!eventExists) {
      this.router.navigate(['/404'])
    }

    return eventExists
  }

}
