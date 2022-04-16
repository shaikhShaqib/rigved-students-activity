import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private _activetedRoute : ActivatedRoute) { }

  username : undefined | string = undefined; 

  ngOnInit(): void {
    this._activetedRoute.params.subscribe((parameter: Params) => {
      this.username = parameter['name'];
    })
  }
}
