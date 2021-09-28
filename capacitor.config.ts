import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  "appId": "io.ionic.starter",
  "appName": "ResearchRecycle",
  "bundledWebRuntime": false,
  "webDir": "www",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  "cordova": {}
}

export default config;
