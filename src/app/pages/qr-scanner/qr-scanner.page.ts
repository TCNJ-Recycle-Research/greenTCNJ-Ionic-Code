import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, SupportedFormat } from '@capacitor-community/barcode-scanner';
import { HttpClient} from '@angular/common/http';
import { Storage } from '@ionic/storage';
//import { stat } from 'fs';


@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage {
//implements OnInit {

  // ngOnInit() {
  // }

  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  usrID: any;

  constructor(public http: HttpClient,  private storage: Storage) {
    //this.scanBarcode();
    storage.get('userID').then((val) => {
      this.usrID = val;
    });
    this.scanBarcode();
  }

  async grantPerms(){
    const status = await BarcodeScanner.checkPermission({ force: false})

    if (status.granted){
      //granted permission to use camera
      return true;
    }

    if (status.denied){
      //denied permission to use camera
      return false;
    }

    if (status.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
  
    if (status.neverAsked) {
      // user has not been requested this permission before
      // it is advised to show the user some sort of prompt
      // this way you will not waste your only chance to ask for the permission
      const c = confirm(
        'We need your permission to use your camera to be able to scan barcodes',
      );
      if (!c) {
        return false;
      }
    }
  
    if (status.restricted || status.unknown) {
      // ios only
      // probably means the permission has been denied
      return false;
    }
  
    // user has not denied permission
    // but the user also has not yet granted the permission
    // so request it
    const statusRequest = await BarcodeScanner.checkPermission({ force: true });
  
    if (statusRequest.asked) {
      // system requested the user for permission during this call
      // only possible when force set to true
    }
  
    if (statusRequest.granted) {
      // the user did grant the permission now
      return true;
    }
  
    // user did not grant the permission, so he must have declined the request
    return false;
  }

  prepare(){
    BarcodeScanner.prepare();
  }

  async scanBarcode(){
    if(this.grantPerms()){
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
  
      if (result.hasContent){
        console.log("here we go!");
        var obj = {func: "add_participant", eventID: result.content, userID: this.usrID, attendance: 1};
        console.log("About to send!")
        this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          var result = data as any[];
          if(result['missingInput']){
            console.log("missing Input");
  
          } else if (result["addSuccess"]) {
            console.log("correct inputs");
          }
          else {
            console.log(result["addSuccess"]);
            console.log("hiiiiii");
          }
      
        });
        console.log("sent?");
      }
      else {
        console.log("Nothing read from QR Code");
      }
      this.scanBarcode();
    }
    else{
      const c = confirm(
        'If you want to grant permission for using your camera, enable it in the app settings.'
      );
      if (c){
        BarcodeScanner.openAppSettings();
      }
    }
  }

  askUser(){
    const c = confirm('Do you want to scan a barcode?');

    if (c){
      this.scanBarcode();
    }
  }

/*
  scanBarcode() {

    BarcodeScanner.startScan().then((barcodeData) => {
      
      console.log('Barcode data', barcodeData);

      this.scannedData = barcodeData;
      
      var obj = {func: "add_participant", eventID: 1, userID: this.usrID, attendance: 1};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          
        var result = data as any[];
      
      });

    }).catch(err => {
      console.log('Error occured: ' + err);
    });
  }
  */

}
