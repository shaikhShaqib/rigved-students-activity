import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    sessionStorage.clear(); //use to clear the session storage.
  }

  userName = new FormControl('');

  handleLogin() {
    let name = this.userName.value;
    sessionStorage.setItem('un', name); // stores the name in the session storage.
    this._router.navigate(['success', name]); //success/:name
  }

}
