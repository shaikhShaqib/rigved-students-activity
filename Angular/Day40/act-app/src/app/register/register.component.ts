import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router : Router, private _fb : FormBuilder, private _service : UserService) { }

  ngOnInit(): void {
  }

  formRegister : FormGroup = this._fb.group ({
    name : [''],
    password : ['']
  });

  handleRegister() {
    this._service.saveUser(this.formRegister.value);
    this._router.navigate(['/login']);
  }
}
