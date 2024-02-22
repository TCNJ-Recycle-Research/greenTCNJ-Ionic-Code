import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from "@capacitor/keyboard";


const config: CapacitorConfig = {
  "appId": "io.ionic.greentcnj",
  "appName": "GreenTCNJ",
  "bundledWebRuntime": false,
  "webDir": "www",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    },
    "Keyboard": {
      "resize": KeyboardResize.Body,
      "resizeOnFullScreen": true,
    }
  },
  "cordova": {}
}

export default config;
