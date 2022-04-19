import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-all-user',
  templateUrl: './find-all-user.component.html',
  styleUrls: ['./find-all-user.component.css']
})
export class FindAllUserComponent implements OnInit {

  users : any[] | undefined = undefined;

  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }

  handleClick() {
    this._service.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
