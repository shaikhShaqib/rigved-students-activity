import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseURl = 'http://localhost:3001/users';
  findOneUrl = 'http://localhost:3001/users/';

  constructor(private _http: HttpClient) { }
  // Find all users
  public getUsers() : Observable<any> {
    return this._http.get(this.baseURl);
  }
  // Finds user with Id
  public getUser(id : number) : Observable<any> {
    return this._http.get(this.findOneUrl + id);
  }

  // store user which will have {_id: ,name: ,age: }
  public storeUser(formValue : any) : Observable<any> {
    return this._http.post(this.baseURl, formValue);
  }

  // delete user with id.
  public deleteUser(id : number) : Observable<any> {
    return this._http.delete(this.findOneUrl + id);
  }

  public updateUser(id: any, age: any, data : any) : Observable<any> {
    return this._http.put(this.findOneUrl + id + '/' + age, data);
  }

}
