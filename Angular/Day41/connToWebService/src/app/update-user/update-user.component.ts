import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  updatedUser : any | undefined = undefined;
  userData : any | undefined = undefined;

  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }

  id = new FormControl('');
  age = new FormControl('');

  handleSubmit() {
    this._service.updateUser(this.id.value, this.age.value, this.userData).subscribe((data) => {
      this.updatedUser = data;
    })
  }
}
