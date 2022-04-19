import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userArray : any[] = [
    {name: 'shaqib', password: '1234'}
  ];

  obj : any | undefined = undefined;
  name : any | undefined = undefined;
  password : any | undefined = undefined;

  constructor() { }

  public getUser() {
    return this.userArray;
  }

  public saveUser(obj : any) {
    let object = {name: obj.name, password: obj.password}
    this.userArray.push(object);

  }
}
