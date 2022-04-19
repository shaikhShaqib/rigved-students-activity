import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-one-user',
  templateUrl: './find-one-user.component.html',
  styleUrls: ['./find-one-user.component.css']
})
export class FindOneUserComponent implements OnInit {

  FindUser : any | undefined = undefined;
  errorMsg : string | undefined = undefined;
  
  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }

  id = new FormControl('');

  handleSubmit() {
    this._service.getUser(this.id.value).subscribe((data) => {
      this.FindUser = data;
    }, (Error) => {
      this.errorMsg = Error?.error?.message;
    })
  }

}
