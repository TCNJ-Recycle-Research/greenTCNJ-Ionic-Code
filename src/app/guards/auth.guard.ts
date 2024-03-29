import { Injectable, NgModule  } from '@angular/core';
import { CanLoad, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { filter, map, take } from 'rxjs/operators';
import { AuthenticationService } from './../services/authentication.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router, public http: HttpClient) { }
 
  canLoad(): Observable<boolean> {    
    return this.authService.isAuthenticated.pipe(
      filter(val => val !== null), // Filter out initial Behaviour subject value
      take(1), // Otherwise the Observable doesn't complete!
      map(isAuthenticated => {
        if (isAuthenticated) {  
          return true;
        } else {      
          this.router.navigateByUrl('/start')
          return false;
        }
      })
    );
  }
}
