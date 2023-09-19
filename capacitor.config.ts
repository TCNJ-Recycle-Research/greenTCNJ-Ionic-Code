import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  "appId": "io.ionic.GreenTCNJ",
  "appName": "GreenTCNJ",
  "bundledWebRuntime": false,
  "webDir": "www",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    },
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  },
  
  "cordova": {}
}

export default config;
