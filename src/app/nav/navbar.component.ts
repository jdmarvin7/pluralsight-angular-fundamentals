import { Observable } from 'rxjs';
import { EventsService } from './../events/shared/services/events.service';
import { AuthService } from './../user/auth.service';
import { Component } from "@angular/core";

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html'
})
export class NavBarComponent {

  searchTerm: string = '';
  foundSessions: any;

  constructor(
    public authService: AuthService,
    private eventService: EventsService
  ) { }

  searchSessions(searchTerm: any){
    this.eventService.searchSessions(searchTerm).subscribe(
      ((sessions: any) => {
        this.foundSessions = sessions
      })
    )
  }

  onSearch() {

  }
}
