import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username : undefined | string = undefined;

  constructor(private _activedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.parent?.params.subscribe((parameter : Params) => {
      this.username = parameter['name'];
    });
  }

}
