import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-builder-demo',
  templateUrl: './form-builder-demo.component.html',
  styleUrls: ['./form-builder-demo.component.css']
})
export class FormBuilderDemoComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }
  
  profile: FormGroup = this.builder.group({
    firstname: [''],
    lastname: ['']
  });

  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }
}
