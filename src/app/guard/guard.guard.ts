import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private route:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const keysToRemove = ['token', 'username', 'role', 'id'];

    let token = localStorage.getItem('token')
    if(token==null || token==undefined)
      {
        clearLocalStorage(keysToRemove);
        this.route.navigate(['/login'])
        return false

      } else{

          const expiry = (JSON.parse(window.atob(token.split('.')[1]))).exp;
          if((Math.floor((new Date).getTime() / 1000)) >= expiry){
            clearLocalStorage(keysToRemove);
            this.route.navigate(['/login'])
            return false;
          }else{
            return true;
      }
    }
  }
}

function clearLocalStorage(keys: string[]): void {
  for (let key of keys) {
    localStorage.removeItem(key);
  }
}
