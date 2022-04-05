import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName : string | undefined = undefined;
  lastName : string | undefined = undefined;
  arr : Array<{fname : string, lname : string}> = [];
  save(fn: string, ln: string) {
    this.firstName = fn;
    this.lastName = ln;
    let obj = {fname: this.firstName, lname: this.lastName}
    this.arr.push(obj)
  }
} 
