import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  username : string = "Bruce";
  dob : Date = new Date(2000, 2, 9);
  amount: number = 40000;

  constructor() { }

  ngOnInit(): void {
  }

}
