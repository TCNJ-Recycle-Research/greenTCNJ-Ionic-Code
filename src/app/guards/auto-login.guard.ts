import { Injectable, NgModule  } from '@angular/core';
import { CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
import { filter, map, take } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router, public http: HttpClient) { }
 
  canLoad(): Observable<boolean> {    
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {
          console.log('Found previous token, automatic login');
          this.router.navigateByUrl('/home', { replaceUrl: true });
        } else {          
          // Simply allow access to the login
          return true;
        }
      })
    );
  }
}
