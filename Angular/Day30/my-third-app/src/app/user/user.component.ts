import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = [
    {name: 'Alex', gender: 'Male', address: {city: 'BLR', state: 'KA'}},
    {name: 'Jennifer', gender: 'Female', address: {city: 'MBI', state: 'MH'}},
    {name: 'Zaheer', gender: 'Male', address: {city: 'PUN', state: 'MH'}},
  ]
}
