import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

//import { Storage } from '@capacitor/storage';
import { Storage } from '@ionic/storage';
import { NgModule } from '@angular/core';
import { App } from '@capacitor/app';
import { ModalController } from '@ionic/angular';
import { removeAllListeners } from 'process';



@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {
  // Init with null to filter out the first value in a guard!
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
 
  constructor(private modalCtrl: ModalController, private http: HttpClient, private storage: Storage) {

    App.addListener('backButton', ({canGoBack}) => {
      if(this.modalCtrl.dismiss()){ }
      else if(!canGoBack){
        App.exitApp();
      } 
      else {
        window.history.back();
      }
    });

    this.loadToken();

  }
 
  async loadToken() {
    const storedToken = await this.storage.get('token');
    if(storedToken){
      this.validateToken(storedToken).then(data => {
        var result = data as any[];

        if (result["loginSuccess"]) {
          console.log("TOKEN VALID");
          this.storage.set('token', result["token"]);
          this.updateStorage(result["userInfo"][0]);
          this.isAuthenticated.next(true);
        } 
        else {
          console.log("TOKEN INVALID");
          this.isAuthenticated.next(false);
        }

      });
      
    }
    else{
      console.log("NO TOKEN");
      this.isAuthenticated.next(false);
    }
  }

  private validateToken(token): Promise<any>{
    var obj = {func: "jwt_login", token: token};
    return this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).toPromise()
      .then(data => data)
      .catch(msg => console.log('Token Validation Error: ' + msg.status + ' ' + msg.statusText))
  }

  private updateStorage(userData): void{
    // this is used to store user info within the app, stores userID, Name, type, and email 
    this.storage.set('userID', userData['userID']); 
    this.storage.set('userName', userData['userFirstName']);
    this.storage.set('userType', userData['userType']);
    this.storage.set('userEmail', userData["userEmail"]);

    // used to set user interests within the app
    this.storage.set('userRecyclingInterest', userData["recyclingInterest"]);
    this.storage.set('userWaterInterest', userData["waterInterest"]);
    this.storage.set('userPollutionInterest', userData["pollutionInterest"]);
    this.storage.set('userEnergyInterest', userData["energyInterest"]);
  }
 
  public login(credentials: {email, password}): Observable<any> {
    var obj = {func: "try_login", email: credentials.email, password: credentials.password};
    return this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).pipe(

      map((data: any) => data),

      switchMap(data => {
        return from(this.storage.set('token', data["token"]));
      }),
      
      tap(_ => {
        this.isAuthenticated.next(true);
          
      })
    )
  }

 
  public logout(): Promise<void> {
    this.isAuthenticated.next(false);
    removeAllListeners();
    return this.storage.remove('token');
  }
}
