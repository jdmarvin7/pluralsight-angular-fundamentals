import { ISession } from './../shared/event.model';
import { restricteWords } from './../shared/restricted-words.validators';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter<ISession>();
  @Output() cancelAddSession = new EventEmitter<boolean>();

  newSessionForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
  duration!: FormControl;
  abstract!: FormControl;
  level!: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [
      Validators.maxLength(400),
      Validators.required,
      //restricteWords(['bar'])
    ]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })
  }

  saveSession(valueForm: any) {
    let session: ISession = {
      id: 0,
      name: valueForm.name,
      presenter: valueForm.presenter,
      duration: valueForm.duration,
      level: valueForm.level,
      abstract: valueForm.abstract,
      voters: []
    }

    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit();
  }
}
