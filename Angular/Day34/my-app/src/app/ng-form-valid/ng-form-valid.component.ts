import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form-valid',
  templateUrl: './ng-form-valid.component.html',
  styleUrls: ['./ng-form-valid.component.css']
})
export class NgFormValidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(formValue: any) : void {
    console.log(formValue);
  }
}
