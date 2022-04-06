import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userName : string | undefined = undefined; 

  user : User = {firstName: '', lastName: ''};
  // to understand the working of two way data binding.
  update() {
    this.user.firstName = this.user.firstName;
  }
}

