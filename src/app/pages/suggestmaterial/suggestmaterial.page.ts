import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

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

  // firstName: new FormControl()

  constructor(private router: Router, public http: HttpClient, public formBuilder: FormBuilder) {
    this.wordForm = formBuilder.group({
        // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
        // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
        word: ['', Validators.compose([Validators.minLength(2), Validators.maxLength(30), Validators.required])]
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
    console.log("try submit");
    console.log(this.wordForm.value);

    if(!this.wordForm.valid){
      console.log("INVALID");
    } else {
      console.log("VALID");

      this.wordSent = true;

      // // Find a way to get email and password input from user
      // var obj = {func: "generate_reset", email: this.emailForm.value['email']};
    
      // this.http.post("http://recycle.hpc.tcnj.edu/php/password-resets-handler.php", JSON.stringify(obj)).subscribe(data => {
      
      //     var result = data as any[];

      //     if(result['missingInput']){
      //       // output to user it succeeded and move to next page
      //       console.log("missing Input");
      //       this.emailSent = false;

      //     } else {
      //       this.emailSent = true;
      //       console.log("email sent");
      //     }
      // });
    }
  }

  wordFailure(){

    return this.wordSent;
  
  }

}
