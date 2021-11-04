import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

//import { Storage } from '@capacitor/storage';
import { Storage } from '@ionic/storage';
import { NgModule } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  //token = '';
 
  constructor(private http: HttpClient, private storage: Storage) {
    this.loadToken();

  }
 
   loadToken() {
    const token = this.loadTokenStorage();
    console.log("HERE IS TOKEN");
    console.log(token);
    if(token){
      console.log("TOKEN FOUND");
      console.log("SENDING TOKEN FOR VALIDATION");
      const result = this.validateToken(token);
      console.log(result);
      console.log("TOKEN SENT FOR VALIDATION");
      var JWTValid = true;
 
      if (JWTValid) {
        console.log('TOKEN LOADED & VALID');
        //this.token = token;
        this.isAuthenticated.next(true);
      } 
      else {
        console.log("TOKEN INVALID");
        this.isAuthenticated.next(false);
      }
      
    }
    else{
      console.log("NO TOKEN");
      this.isAuthenticated.next(false);
    }
  }

  async loadTokenStorage(){
    console.log("loading token from func!");
    const token = await this.storage.get('token');
    console.log(token);
    return token;
  }

  validateToken(token): String{
    var obj = {func: "jwt_login", token: token};
    this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {
                
      var result = data as any[];
      console.log("validating token.......");
      console.log(result);
      console.log(result["loginSuccess"]);
      console.log(result["token"]);
      return result["token"];
    
    });
    return "";
  }

  /*
  async validateToken(token){
    var obj = {func: "jwt_login", token: token};
    this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {
                
      var result = data as any[];
      console.log("validating token.......");
      console.log(result);
      console.log(result["loginSuccess"]);
      console.log(result["token"]);
      return result["token"];
    
    });

  } */
 
  public login(credentials: {email, password}): Observable<any> {
    var obj = {func: "try_login", email: credentials.email, password: credentials.password};
    return this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).pipe(

      map((data: any) => data),

      switchMap(data => {
        console.log("SETTING TOKEN");
        //console.log(data["token"]);
        return from(this.storage.set('token', data["token"]));
      }),
      
      tap(_ => {
        this.isAuthenticated.next(true);
          
      })
    )
  }

 
  public logout(): Promise<void> {
    this.isAuthenticated.next(false);
    console.log("DELETING TOKEN");
    return this.storage.remove('token');
  }
}
