import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.css']
})
export class StoreUserComponent implements OnInit {

  info : any | undefined = undefined;
  errorMessage : any | undefined = undefined;

  constructor(private _service : UserService, private _fb : FormBuilder) { }

  ngOnInit(): void {
  }

  // create a form that will have 3 form controls.
  userFormControl : FormGroup = this._fb.group({
    _id : [],
    name : [],
    age : []
  });

  handleSubmit() {
    this._service.storeUser(this.userFormControl.value).subscribe((data) => {
      this.info = data;
    }, (Error) => {
      this.errorMessage = Error?.error?.message;
    })
  }

}
