import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>
      first works {{userName}}!
    </p>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  userName : string = "Alex";
  constructor() { }

  ngOnInit(): void {
  }

}
