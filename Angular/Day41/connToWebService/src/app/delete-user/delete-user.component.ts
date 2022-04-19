import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  deleteUser : any[] | undefined = undefined;

  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }

  Id = new FormControl('');

  handleSubmit() {
    this._service.deleteUser(this.Id.value).subscribe((data) => {
      this.deleteUser = data;
    })
  }

}
