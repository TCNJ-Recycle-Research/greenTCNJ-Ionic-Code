import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import {  MenuController } from '@ionic/angular';


// this page is the introductory page that loads when users initially open the app 
// - if you want to seeit/test it you can go to the urn or open the ionic serve on an incognito tab
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;
 
  constructor(public menuCtrl: MenuController, private router: Router) {
    this.menuCtrl.enable(false);
   }
 
  ngOnInit() {
  }
 
  // allows you to move to the next slide
  next() {
    this.slides.slideNext();
  }
 
  // sets a key meaning that the app user is no longer new to the app so they will not see this page again once they have seen it yet
  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'});

    // reditrects to the start page and clears url
    this.router.navigateByUrl('/start', { replaceUrl:true });
  }

}
