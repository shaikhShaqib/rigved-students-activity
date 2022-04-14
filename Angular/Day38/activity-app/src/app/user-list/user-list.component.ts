import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserlistComponent implements OnInit {
  items: undefined | any[]=undefined
  constructor(public service: UserService) { }

  ngOnInit(): void {
    this.items=this.service.getUser()
  }

}