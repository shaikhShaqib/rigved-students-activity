import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-activity',
  templateUrl: './form-activity.component.html',
  styleUrls: ['./form-activity.component.css']
})
export class FormActivityComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }

  profile: FormGroup = this.builder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required]
    }),
  });

  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }

}
