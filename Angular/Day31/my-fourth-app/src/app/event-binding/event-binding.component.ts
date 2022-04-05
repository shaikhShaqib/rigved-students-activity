import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName : string | undefined = undefined;
  lastName : string | undefined = undefined;
  // through event binding we can pass values to fn & ln.
  save (fn : string, ln : string) : void {   
    this.firstName = fn;
    this.lastName = ln;
  }

}
