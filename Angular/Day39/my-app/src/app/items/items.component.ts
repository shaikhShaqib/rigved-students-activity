import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(private _activetedRoute : ActivatedRoute) { }

  userName : undefined | string = undefined;
  
  ngOnInit(): void {
    this._activetedRoute.parent?.parent?.params.subscribe((parameter : Params) => {
      this.userName = parameter['name'];
    });
  }

}
