import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: UserService, private _router: Router) { }

  ngOnInit(): void {
  }

  userForm : FormGroup = this.fb.group({
    userId : [''], name : [''], dob : ['']
  });

  saveForm() {
    this.service.save(this.userForm.value);
    this._router.navigate(['success', this.userForm.value.userId]);
  }
}
