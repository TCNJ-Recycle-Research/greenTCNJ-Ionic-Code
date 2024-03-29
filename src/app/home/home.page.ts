import { Component, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { User } from '../models/user';
import {  MenuController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { formatDate } from '@angular/common';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

@NgModule({
  imports: [
    IonicStorageModule.forRoot()
  ]
})

export class HomePage {
  user: any;
  welcomeMsg;

  today = new Date(Date.now());
  events: {name: any, description: any, date: any}[] = [];

  constructor(private userService: UserService, public menuCtrl: MenuController, @Inject(LOCALE_ID) private locale: string, private router: Router, public http: HttpClient, private storage: Storage) {
    this.loadMyEvents();
    this.menuCtrl.enable(true);
    this.user = this.userService;

    storage.get('userID').then((val) => {
      //updates user last login
      var obj = {func: "update_last_login", userID: val};
      this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {});
    });

    
    storage.get('userName').then((val) => {
      this.welcomeMsg = "Welcome to Green TCNJ " + val + "!";
    });
    
  } 

  loadMyEvents() {
  
    this.storage.get('userID').then((val) => {
      var obj = {func: "get_my_events", userID: val};
      this.http.post("https://recycle.hpc.tcnj.edu/php/events-handler.php", JSON.stringify(obj)).subscribe(data => {
      
          var result = data as any[];

          for(var i = 0; i < result.length; i++){

            // turns the event date into a date format
            var tempDate = new Date(result[i]["eventDate"]);

            // for loop to show any events if they are scheduled for today
            if((tempDate.getMonth()+1) == (this.today.getMonth()+1) && ((tempDate.getDate()+1) == this.today.getDate()) && (tempDate.getFullYear() == this.today.getFullYear())){
              this.events.push({name: result[i]["eventName"], description: result[i]["eventDescription"], date: result[i]["eventDate"]});
            }
          }

          if(this.events.length == 0){
            this.events.push({name: "No events listed for you today.", description: " ", date: " " });
          }
      });
  });
}


  // simple function to link search bar to next page when clicked 
  onClick(ev: any){
    this.router.navigate(['/whatgoeswhere']);
  }

}
