import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
  }

  formProfile = this._fb.group ({
    name: [],
    password: [],
    phone: []
  });

  handleRegister() {
    this._router.navigate(['/login']);
    alert('Name Registered with '+ this.formProfile.value.name);
  }
}
