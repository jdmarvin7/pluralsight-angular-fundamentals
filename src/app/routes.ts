import { CreateSessionComponent } from './events/events-details/create-session.component';
import { EventRouteActivator } from './events/events-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/events-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventListResolver } from './events/shared/services/event-list-resolver.service';

export const appRoutes: Routes = [
  { title: 'Events', path: 'events', component: EventsListComponent, resolve: { events: EventListResolver} },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {path: 'events/session/new', component: CreateSessionComponent},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '**', component: Error404Component }
]
