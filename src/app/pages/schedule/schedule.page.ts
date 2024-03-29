import { Component, OnInit, ViewChild, Inject, LOCALE_ID } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { EventModalPage } from '../event-modal/event-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})

export class SchedulePage {
  eventSource = [];
  viewTitle: string;
  
  eventName: string;
  eventDate: Date;
  eventStartTime: Date;
  eventEndTime: Date;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private router: Router, public http: HttpClient,private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string,private modalCtrl: ModalController, private storage: Storage) {

    this.loadAllEvents();
  }

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }


  loadAllEvents(){
    this.eventSource = this.loadEvents();
  }

  loadEvents(): any[] {


    this.storage.get('userID').then((val) => {
      var obj = {func: "get_my_events", userID: val};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/events-handler.php", JSON.stringify(obj)).subscribe(data => {
      
        var result = data as any[];

        console.log(result);

        this.createStaticNormalDayEvents(result);

        this.myCal.loadEvents();
          
      });

  });
    
    return this.eventSource;
}


createStaticNormalDayEvents(events) {

  for (var i = 0; i < events.length; i ++) {

      var date = events[i]["eventDate"].split("-");

      date = new Date(parseInt(date[0]), parseInt(date[1]) - 1, parseInt(date[2]));

      var name = events[i]["eventName"];
      var description = events[i]["eventDescription"];

      var start = events[i]["startTime"].split(":", 2);

      var startHour = start[0];
      var startMinute = start[1];

      var end = events[i]["endTime"].split(":", 2);

      var endHour = end[0];
      var endMinute = end[1];

      var startTime =  new Date(date.getFullYear(), date.getMonth(), date.getDate(), startHour, startMinute, 0);
      var endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), endHour, endMinute, 0);

      this.eventSource.push({
          title: name,
          startTime: startTime,
          endTime: endTime,
          desc: description,
          allDay: false,
          ID: events[i]["eventID"],
          registered: (events[i]["attended"] != null)
      });
  }
}
  passEventArray(ev: any){
    let navigationExtras: NavigationExtras = {
      state: {
        events: this.eventSource 
      }
    };
    this.router.navigate(['/my-registered-events'], navigationExtras);
  }


  // https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript 
  // function to detect a link from within an event description and allow it to be clickable in the event
  linkify(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
      url = '<a href="' + url + '" target="_blank">  here </a>';
      console.log(url);
      return url;
    });
  }

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
        eventDescription: this.linkify(event.desc),
        eventID: event.ID,
        registered: event.registered
      }
    });
   
    await modal.present();

  }

  // https://github.com/twinssbc/Ionic2-Calendar/blob/v6/demo/pages/home.ts

}
