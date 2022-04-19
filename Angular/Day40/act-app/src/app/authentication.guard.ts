import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(public service: UserService, private _router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userArr = this.service.getUser();
    // console.log(userArr);
    let name = route.paramMap.get('name');
    let password = route.paramMap.get('password')

    for (let i = 0; i < userArr.length; i++) {
      if (name === userArr[i].name && password === userArr[i].password) {
        return true;
      }
    }

    alert('Please check name or username');
    this._router.navigate(['/login']);
    return false;;
  }

}
