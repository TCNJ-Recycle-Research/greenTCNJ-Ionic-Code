import { Component, AfterViewInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular'; 
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router, NavigationExtras } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements AfterViewInit {

  viewTitle: string;
  
  modalReady = false;
  
  eventObj;
  eventID;
  eventName;
  eventTime;
  eventDescription;
  registered;

  constructor(private modalCtrl: ModalController, private storage: Storage, private router: Router, public http: HttpClient, public navCtrl: NavController) { 
    this.parseLink();
  }

  ngAfterViewInit() {
    
    if(this.registered == true){
      
    }
    setTimeout(() => {
      this.modalReady = true;   
    }, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }

  parseLink(){
    console.log(this.eventDescription);
  }

  registerForEvent(){

    this.storage.get('userID').then((val) => {

      var obj = {func: "add_participant", userID: val, eventID: this.eventID, attendance: 0};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          
        var result = data as any[];
        
        if(result["addSuccess"]){
          this.eventObj.registered = this.registered = true;
        } 

      });

    });
    
  }

  unregisterForEvent(){

    this.storage.get('userID').then((val) => {

      var obj = {func: "delete_participant", eventID: this.eventID, userID: val};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          
        var result = data as any[];

        if(result["deleteSuccess"]){
          this.eventObj.registered = this.registered = false;
          console.log("we out");
        } 

      });
      
    });

    
  }
}
