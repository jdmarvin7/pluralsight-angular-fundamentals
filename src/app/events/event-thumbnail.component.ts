import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="card hoverwell well mb-2">
    <h2 class="card-header">{{ event?.name | uppercase }}</h2>
    <div class="card-content p-3">
      <div>Date: {{ event?.date }}</div>
      <div [class.bg-light]="event?.time === '8:00 am'"
      [ngClass]="{ 'text-primary': event?.time === '8:00 am'}"
      [ngStyle]="{ 'color': event?.time === '8:00 am' ? '#00300' : '#bbb' }"
      >Time: {{ event?.time }}</div>
      <div [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
      </div>
      <div>Price: {{ event?.price | currency }}</div>
      <div [hidden]="!event?.location">
        <span>Location: {{ event?.location?.adress }}</span>
        <span>&nbsp;</span>
        <span>{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div class="" *ngIf="event.onlineUrl">
        Online URL: {{ event?.onlineUrl }}
      </div>
    </div>
    <button *ngIf="!hide"
    (click)="handleClickMe()"
    class="btn btn-primary m-3">
    Click Me!
    </button>
  </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px }
    .weel div { color: #bbb }
  `]
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  hide = true

  handleClickMe() {
    this.eventClick.emit('foo');
  }
}
