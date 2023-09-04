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
  
  // list of elements passed from the schedule page
  eventObj;
  eventID;
  eventName;
  eventLocation;
  eventTime;
  eventDescription;

  // boolean value used on html to display register or unregister button
  registered;

  constructor(private modalCtrl: ModalController, private storage: Storage, private router: Router, public http: HttpClient, public navCtrl: NavController) { 

  }

  ngAfterViewInit() {
    
    if(this.registered == true){
      
    }
    setTimeout(() => {
      this.modalReady = true;   
    }, 0);
  }
 
  // function attached to the close button to close the modal
  close() {
    this.modalCtrl.dismiss();
  }

  // function to register for an event calling the php script
  registerForEvent(){

    this.storage.get('userID').then((val) => {

      //need to pass the userID eventID, and attendance Value
      // attendance valaue is initially set to null, 0 means the user is registered but not attendin, and 1 is for registered and attending
      //thus we are hardcoding it to 0 and it will be updated once the attendance is set
      var obj = {func: "add_participant", userID: val, eventID: this.eventID, attendance: 0};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          
        var result = data as any[];
        
        if(result["addSuccess"]){
          this.eventObj.registered = this.registered = true;
        } 

      });

    });
    
  }

  // function to unregister for an event calling the php script
  unregisterForEvent(){

    this.storage.get('userID').then((val) => {

      //need to pass the eventID, and userID to the php function 
      var obj = {func: "delete_participant", eventID: this.eventID, userID: val};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          
        var result = data as any[];

        if(result["deleteSuccess"]){
          this.eventObj.registered = this.registered = false;
        } 

      });
      
    });

    
  }
}
