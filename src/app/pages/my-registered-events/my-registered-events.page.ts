import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { EventModalPage } from '../event-modal/event-modal.page';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-my-registered-events',
  templateUrl: './my-registered-events.page.html',
  styleUrls: ['./my-registered-events.page.scss'],
})
export class MyRegisteredEventsPage{

  // arrays to hold all events, your registered events, registered past events, and registered future events, 
  eventList = [];
  myEvents = [];
  pastEvents = [];
  futureEvents = [];

  // boolean variables for checks to display no events message on the HTML file 
  noFutureEvents: any;
  noPastEvents: any;
  noEvents: any;
  gotAllEvents: any;

  // date to sort events into past/future
  today = new Date(Date.now());

  type: string; // used to initialize tab to the view all page 

  constructor(private router: Router, private route: ActivatedRoute, public http: HttpClient,private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,private modalCtrl: ModalController) { 
      
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.eventList = this.router.getCurrentNavigation().extras.state.events;
          for(var i = 0; i < this.eventList.length; i++){
            this.registeredForEvent(i);
          }
        }
    });

    this.type = "all";
  }


  registeredForEvent(num){
    
    if(this.eventList[num].registered){
      this.myEvents.push(this.eventList[num]);
    }

    if(num == (this.eventList.length - 1)){
      this.gotAllEvents = true;

      this.myEvents = this.myEvents.sort((a, b) => b.date - a.date);
      
      this.getAllEvents();
      this.sortEvents();
    } 

  }

  getAllEvents(){
    return this.myEvents;
  }

  sortEvents(){

    for(var i = 0; i < this.myEvents.length; i++){
      // turns the event date into a date format
      var tempDate = new Date(this.myEvents[i].startTime);

      // if statement to sort through events into past and future arrays 
      if(tempDate >= this.today){
        this.futureEvents.push(this.myEvents[i]);
      }else{
        this.pastEvents.unshift(this.myEvents[i]);
      }
    }
    
    // checks to see if any event arrays are empty by checking if length  == 0 to display no events message
    if(this.myEvents.length == 0){
      this.noEvents = "No registered events.";
    }else{
      this.noEvents = null;
    }
    
    if(this.futureEvents.length == 0){
      this.noFutureEvents = "No upcoming registered events.";
    }else{
      this.noFutureEvents = null;
    }
    
    if(this.pastEvents.length == 0){
      this.noPastEvents = "No registered past events.";
    }else{
      this.noPastEvents = null;
    }

  }


  // opens up event-modal for the selected event, called the same way as it is being called on the schedule page
  async onEventSelected(event) {

    let date = formatDate(event.startTime, 'MMM d, yyyy', this.locale);
    let start = formatDate(event.startTime, 'h:mma', this.locale);
    let end = formatDate(event.endTime, 'h:mma', this.locale);
    const modal = await this.modalCtrl.create({
      component: EventModalPage,
      componentProps:{
        eventObj: event,
        eventName: event.title,
        eventTime: date + '    '  + start + ' - ' + end,
        eventDescription: event.desc,
        eventID: event.ID,
        registered: event.registered
      }
    });
   
    await modal.present();

  }

}
