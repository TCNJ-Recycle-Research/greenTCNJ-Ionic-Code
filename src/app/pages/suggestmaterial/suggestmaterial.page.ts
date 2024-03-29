import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-suggestmaterial',
  templateUrl: './suggestmaterial.page.html',
  styleUrls: ['./suggestmaterial.page.scss'],
})
export class SuggestmaterialPage{

  emailInput: string = "";
  wordForm: FormGroup;
  myControl: FormControl;
  wordSent: boolean = false;
  today = new Date(Date.now());
  usrEmail;

  // firstName: new FormControl()

  constructor(private router: Router, public http: HttpClient, public formBuilder: FormBuilder, private storage: Storage) {
    this.wordForm = formBuilder.group({
        // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
        // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
        word: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(30), Validators.required])],
        description: ['']
    });

    storage.get('userEmail').then((val) => {
      console.log('Your email is', val);
      this.usrEmail = val;
    });

  }


    // responsible for printing error messages to the screen based on validator 
    validation_messages = {
      'word': [
          { type: 'minlength', message: 'Your suggested material must be at least 2 characters long.' },
          { type: 'maxlength', message: 'Your suggested material must be less than 30 characters long.' },
          { type: 'required', message: 'You must enter a word to submit.' }
        ]
      }

  submitWord(){

    if(!this.wordForm.valid){
      console.log("INVALID");
    } else {
      console.log("VALID");

      this.wordSent = true;

      // Find a way to get email and password input from user
      var obj = {func: "add_request", requestMaterial: this.wordForm.value['word'],  requestDescription: this.wordForm.value['description'], userEmail: this.usrEmail};
    
      this.http.post("https://recycle.hpc.tcnj.edu/php/material-requests-handler.php", JSON.stringify(obj)).subscribe(data => {
      
          var result = data as any[];

          if(result['missingInput']){
            // output to user it succeeded and move to next page
            this.wordSent = false;

          } else {
            this.wordSent = true;
            this.wordForm.reset(); 
          }
      });

    }
  }

  wordFailure(){
    return this.wordSent;
  }

  formInputIsRequired(formInput: string) {
    if (this.wordForm.controls[formInput]) {
      if (this.wordForm.controls[formInput].hasError('required')) {
        return true;
      }
    }
    return false;
  }

}
