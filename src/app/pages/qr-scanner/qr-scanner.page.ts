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

  resultHTML = null;
  scanActive = false;

  constructor(public http: HttpClient,  private storage: Storage) {
    storage.get('userID').then((val) => {
      this.usrID = val;
    });
    //this.scanBarcode();
  }

  prepare(){
    BarcodeScanner.prepare();
  }

  destroy(){
    BarcodeScanner.stopScan();
    this.scanActive = false;
  }

  async grantPerms(){
    const status = await BarcodeScanner.checkPermission({force: false});

    if (status.granted){
      //granted permission to use camera
      return true;
    }

    if (status.denied) {
      // the user denied permission for good
      // redirect user to app settings if they want to grant it anyway
      const c = confirm(
        'If you want to grant permission for using your camera, enable it in the app settings.',
      );
      if (c) {
        BarcodeScanner.openAppSettings();
      }
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
  
    if (statusRequest.granted) {
      // the user did grant the permission now
      return true;
    }
  
    // user did not grant the permission, so he must have declined the request
    return false;
  }

  async scanBarcode(){
    if(this.grantPerms()){
      this.scanActive = true;
      const result = await BarcodeScanner.startScan({ targetedFormats: [SupportedFormat.QR_CODE] });
      if (result.hasContent){
        this.resultHTML = result.content;
        var obj = {func: "add_participant", eventID: result.content, userID: this.usrID, attendance: 1};
        this.http.post("https://recycle.hpc.tcnj.edu/php/participants-handler.php", JSON.stringify(obj)).subscribe(data => {
          var response = data as any[];
        });
        if(confirm("Your code was read successfully! Did you want to scan again?")){
          this.scanBarcode();
        }
        else{
          this.scanActive = false;
        }
      }
      else {
        console.log("Nothing read from QR Code");
        if(confirm("Sorry, nothing was read from that code! Try again?")){
          this.scanBarcode();
        }
        else{
          this.scanActive = false;
        }
      }
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

}
