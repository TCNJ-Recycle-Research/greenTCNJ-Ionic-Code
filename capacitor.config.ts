import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  "appId": "io.ionic.starter",
  "appName": "ResearchRecycle",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "www",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  "cordova": {}
}

export default config;
