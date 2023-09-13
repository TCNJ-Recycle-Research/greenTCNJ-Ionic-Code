import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppVersion } from "@ionic-native/app-version/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  protected app_version: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appVersion: AppVersion
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleBlackOpaque();
      // Added 9/12/23 to utilize app_version variable from app-version npm package
      this.appVersion.getVersionNumber().then(
        (versionNumber) => {
          this.app_version = versionNumber;
        },
        (error) => {
          console.log(error);
        });
      this.splashScreen.show();
    });
  }
}
