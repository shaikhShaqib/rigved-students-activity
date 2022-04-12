import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname: FormControl = new FormControl('', Validators.required);
  lastname: FormControl = new FormControl('', Validators.compose([
    Validators.required, Validators.minLength(4), Validators.maxLength(10)
  ]));

  handleSubmit() : void {
    console.log(this.firstname.value);
    console.log(this.lastname.value);
  }
}
