import { Directive, OnInit } from "@angular/core";


@Directive({
  selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
