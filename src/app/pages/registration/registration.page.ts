import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { HttpClient} from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { CustomValidationService } from 'src/app/services/custom-validation.service';
import { IonSlides } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit{

  @ViewChild(IonSlides)slides: IonSlides;
  signupForm: FormGroup;
  myControl: FormControl;
  invalidRegistration: boolean = false;
  tempTest: {recycling_interest: boolean, water_interest: boolean, pollution_interest: boolean, energy_interest: boolean};
  temp: {recycling: any, water: any, pollution: any, energy: any};
  testing: boolean[];
  buttonDisabled: any;
  userVerified = false;

  

  ngOnInit() {
  }

    // thses are currently not being stored anywhere they are just in place to select after registration, will connect to db next semester 
    public form = [
      { val: 'Recycling', isChecked: false },
      { val: 'Water Conservation', isChecked: false },
      { val: 'Pollution Prevention', isChecked: false },
      { val: 'Energy', isChecked: false }
    ];

  constructor(private router: Router, public http: HttpClient, public formBuilder: FormBuilder, private customValidator: CustomValidationService, private alertCtrl: AlertController) {
    this.signupForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required])],
        // https://stackoverflow.com/questions/48350506/how-to-validate-password-strength-with-angular-5-validator-pattern
        password: ['', Validators.compose([Validators.maxLength(30), Validators.minLength(8),Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}'), Validators.required])],
        passwordRepeat: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
        userType: ['', Validators.compose([Validators.required])]
        // userInterests: [
        //   { val: 'Recycling', isChecked: false },
        //   { val: 'Water Conservation', isChecked: false },
        //   { val: 'Pollution Prevention', isChecked: false },
        //   { val: 'Energy', isChecked: false }
        // ]

    }, {validator: this.customValidator.passwordMatchValidator('password', 'passwordRepeat')} );

    // initialized to all 0s for false
    this.temp = {
      recycling: 0, 
      water: 0, 
      pollution: 0, 
      energy: 0
    };
    this.buttonDisabled = true;
   // this.slides.lockSwipeToNext(true); 
   if(!this.signupForm.valid){
    console.log("INVALID");
    this.buttonDisabled = true;
    
  }
  else{
    console.log("VALID");
    this.buttonDisabled = false;
  }
  
  }

  // responsible for printing error messages to the screen based on validator 
  validation_messages = {
    'firstName':[
      { type: 'maxlength', message: 'Your first name cannot be more than 30 characters long.'},
      { type: 'required', message: 'A first name is required.' },
      { type: 'pattern', message: 'You must enter a valid first name' }
    ],
    'lastName':[
      { type: 'maxlength', message: 'Your last name cannot be more than 30 characters long.'},
      { type: 'required', message: 'A last name is required.' },
      { type: 'pattern', message: 'You must enter a valid last name' }
    ],
    'email': [
        { type: 'maxlength', message: 'Your email cannot be more than 30 characters long.' },
        { type: 'required', message: 'An email is required.' },
        { type: 'pattern', message: 'You must enter a valid email.' }
      ],
      'password': [
        { type: 'minlength', message: 'Your password must be at least 8 characters long.'},
        { type: 'pattern', message: 'Your password must include 1 uppercase letter, 1 lowercase letter, and one number' },
        { type: 'maxlength', message: 'Your last name cannot be more than 30 characters long.'},
        { type: 'required', message: 'A password is required.' }
      ],
      'passwordRepeat': [
        //{ type: 'required', message: 'A password is required.' }
      ],
      'userType': [
        { type: 'required', message: 'A user type is required.' }
      ]
    }

  trySignup(){

    if(!this.signupForm.valid){
      console.log("INVALID");
      this.buttonDisabled = true;
      
    }
    else{
      console.log("VALID");
      this.buttonDisabled = false;

      var email = this.signupForm.value['email'];
      var pwd = this.signupForm.value['password'];
      var pwdRepeat = this.signupForm.value['passwordRepeat'];
      var first = this.signupForm.value['firstName'];
      var last = this.signupForm.value['lastName'];
      var type = this.signupForm.value['userType'];

      var obj = {func: "add_user2", email: email, password: pwd, passwordRepeat: pwdRepeat, firstName: first, lastName: last, userType: type, userInterests: this.temp};

      //checking to see if user exists in users table (verified users)
      this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {

          var result = data as any[];
  
          if(result["addSuccess"]){
            // output to user it succeeded and move to next page
            console.log("Signup SUCCESS");
            this.invalidRegistration = false;
            this.successAlert(email);
            this.navigateToLogin();
          }
          else if(result["missingInput"]){
            console.log("Missing Input");
            this.failAlert("ERROR: Server Missing Input");
            this.invalidRegistration = true;
            this.buttonDisabled = true;
          }
          else if(result["passwordMismatch"]){
            console.log("passwords didnt match");
            this.failAlert("ERROR: Passwords do not match");
            this.invalidRegistration = true;
            this.buttonDisabled = true;
          }
          else if(result["userExists"]){
            this.userVerified = true;
            console.log("verified user exists");
            this.failAlert("ERROR: A verified account with that email already exists! If you can't remember your password, reset it on the sign in page.");
            this.invalidRegistration = true;
            this.buttonDisabled = true;
          }
          else if(result["unverifiedExists"]){
            console.log("unverified user exists");
            this.failAlert("ERROR: An unverified account with that email already exists! Check your inbox for the verification email.");
            this.invalidRegistration = true;
            this.buttonDisabled = true;
          }
          else{
            // dont move to next page and output error message "Email or password entered was incorrect"
            console.log("Signup failure on server");
            this.failAlert("ERROR: Signup failure. If this issue persists, please contact an administrator.");
            this.invalidRegistration = true;
          }
      });

    }
    
  }

  async successAlert(email : string){

    var obj = {func: "generate_confirmation", email: email};
    this.http.post("https://recycle.hpc.tcnj.edu/php/verify-email-handler.php", JSON.stringify(obj)).subscribe(data => {
      console.log("sent confirmation email");
    });

    const alert = await this.alertCtrl.create({
      header: 'Registration Success!',
      message: 'Please verify your account with the email we sent you!',
      buttons: ['OK'],
    });

    await alert.present();

  }

  async failAlert(msg: string){
    const alert = await this.alertCtrl.create({
      header: 'Registration Failed',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();

  }


  setRecycleInterest(x){
    if(x){
      this.temp.recycling = 1;
    }else{
      this.temp.recycling = 0;
    } 
  }

  setWaterInterest(x){
    if(x){
      this.temp.water = 1;
    }else{
      this.temp.water = 0;
    } 
  }

  setPollutionInterest(x){
    if(x){
      this.temp.pollution = 1;
    }else{
      this.temp.pollution = 0;
    } 
  }

  setEnergyInterest(x){
    if(x){
      this.temp.energy = 1;
    }else{
      this.temp.energy = 0;
    } 
  }


  navigateToLogin() {
    this.router.navigateByUrl('/login');
 }

 registrationFailure(){

  return this.invalidRegistration;

}

formInputIsRequired(formInput: string) {
  if (this.signupForm.controls[formInput]) {
    if (this.signupForm.controls[formInput].hasError('required')) {
      return true;
    }
  }
  return false;
}

next() {
  if(this.signupForm.valid){
    this.slides.slideNext();
  }
  
}

fillForm(){
  if(this.signupForm.valid){
    this.slides.lockSwipeToNext(false);
  }else{
    this.slides.lockSwipeToNext(true);
  }
}

addValue(e): void {

    if(e.currentTarget.name == "ion-cb-0"){
      this.setRecycleInterest(e.currentTarget.checked);
    }

    if(e.currentTarget.name == "ion-cb-1"){
      this.setWaterInterest(e.currentTarget.checked);
    }

    if(e.currentTarget.name == "ion-cb-2"){
      this.setPollutionInterest(e.currentTarget.checked);
    }

    if(e.currentTarget.name == "ion-cb-3"){
      this.setEnergyInterest(e.currentTarget.checked);
    }
}

}
