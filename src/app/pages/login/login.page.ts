import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { NavController } from '@ionic/angular'; 
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthenticationService } from './../../services/authentication.service';
import {  MenuController } from '@ionic/angular';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  
  // form input 
  emailInput: string = "";
  passwordInput: string = "";
  
  // form variables
  loginForm: FormGroup;
  myControl: FormControl;

  // boolean values for login checks 
  invalidLogin: boolean = false;
  pageLoaded: boolean = false;
  wrongInput: boolean = false;
  correctInput: boolean = false;
  missingInput: boolean = false;
  canLogin: boolean = false;

  constructor(private storage: Storage, public menuCtrl: MenuController, private alertController: AlertController, private authService: AuthenticationService, private router: Router, public http: HttpClient, public navCtrl: NavController, public formBuilder: FormBuilder, private loadingController: LoadingController) {
    this.loginForm = formBuilder.group({
        // Require validators for the input fields so we can quickly tell them if their input is valid, the patten string is what characters
        // are allowed in the field and for email it makes sure there is a @ character and a domain field like .com
        email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.required])],
        password: ['', Validators.compose([Validators.maxLength(30), Validators.required])]
    });
    this.menuCtrl.enable(false);
  }

  

  // responsible for printing error messages to the screen based on validator 
  validation_messages = {
    'email': [
        { type: 'maxlength', message: 'Your email cannot be more than 30 characters long.' },
        { type: 'pattern', message: 'You must enter a valid email.' }
      ],
      'password': [
        { type: 'required', message: 'A password is required.' }
      ]
  }


checkValidLogin(){

  if(!this.loginForm.valid){
    console.log("INVALID");
  }else{
    console.log("VALID");

          // Find a way to get email and password input from user
          var obj = {func: "try_login", email: this.loginForm.value['email'], password: this.loginForm.value['password']};
          
          this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {
                
            var result = data as any[];
    
              if(result["loginSuccess"]){
                this.invalidLogin = false;
    
                // this is used to store user info within the app, stores userID, Name, type, and email 
                this.storage.set('userID', result['userInfo']['userID']); 
                this.storage.set('userName', result['userInfo']['userFirstName']);
                this.storage.set('userType', result['userInfo']['userType']);
                this.storage.set('userEmail', result["userInfo"]["userEmail"]);
    
                // used to set user interests within the app
                this.storage.set('userRecyclingInterest', result["userInfo"]["recyclingInterest"]);
                this.storage.set('userWaterInterest', result["userInfo"]["waterInterest"]);
                this.storage.set('userPollutionInterest', result["userInfo"]["pollutionInterest"]);
                this.storage.set('userEnergyInterest', result["userInfo"]["energyInterest"]);
    
                this.invalidLogin = false;
                this.correctInput = true;
                this.missingInput = false;
                this.wrongInput = false;

                
              }else if(result["missingInputs"]){
                // output error message of missing inputs
                console.log("Missing Input");

                this.invalidLogin = true;
                this.correctInput = false;
                this.missingInput = true;
                this.wrongInput = false;
                    
              }else{
                // dont move to next page and output error message "Email or password entered was incorrect"
                console.log("Email or password was incorrect");
 
                this.invalidLogin = true;
                this.correctInput = false;
                this.missingInput = false;
                this.wrongInput = true;      
              }
          });

          
    }
  this.canLogin  = true;
  }

  //
  async login(){

    const loading = await this.loadingController.create();
    await loading.present();
    
    if(!this.loginForm.valid && this.canLogin){
      console.log("INVALID");

      this.authService.login(this.loginForm.value).subscribe(
        async (res) => {
          await loading.dismiss();
          const alert = await this.alertController.create({
            header: 'Login failed',
            message: 'Please enter valid fields.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      );
    }else{
      console.log("VALID");

      // valid login
      if(this.loginSuccess() && !this.missingValues() && !this.wrongCredientals() ){

        this.authService.login(this.loginForm.value).subscribe(
          async (res) => {
            
            loading.dismiss();
            this.invalidLogin = false;
            this.navigateToHomePage();
          }
        );

        this.correctInput = true;
        this.missingInput = false;
        this.wrongInput = false;

      // missing input  
      }else if(!this.loginSuccess() && this.missingValues() && !this.wrongCredientals()){

        console.log("Missing Input");
        
        this.authService.login(this.loginForm.value).subscribe(
          async (res) => {
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Login failed',
              message: 'You are missing input.',
              buttons: ['OK'],
            });
            await alert.present();
          }
        );

        this.correctInput = false;
        this.missingInput = true;
        this.wrongInput = false;

      // wrong credentials 
      }else if(!this.loginSuccess() && !this.missingValues() && this.wrongCredientals()){
        
        console.log("Email or password was incorrect");

        this.authService.login(this.loginForm.value).subscribe(
          async (res) => {
            await loading.dismiss();
            const alert = await this.alertController.create({
              header: 'Login failed',
              message: 'Your email or password was incorrect',
              buttons: ['OK'],
            });
            await alert.present();
          }
        );

        this.correctInput = false;
        this.missingInput = false;
        this.wrongInput = true;

      // should never resch here   
      }else{
        loading.dismiss();
      }

    }
     
  }

  // function to route to the home page after logging in 
  navigateToHomePage() {
    this.pageLoaded = true;
    this.menuCtrl.enable(true);
    this.router.navigate(['/home'], { replaceUrl: true });
    this.router.navigateByUrl('/home').then(success => console.log(`routing status: ${success}`));
  }


  // used to add * to email and it is removed once something is entered
  formInputIsRequired(formInput: string) {
    if (this.loginForm.controls[formInput]) {
      if (this.loginForm.controls[formInput].hasError('required')) {
        return true;
      }
    }
    return false;
  }

  // boolean return values
  loginFailure(){

    return this.invalidLogin;

  }

  wrongCredientals(){

    return this.wrongInput;

  }

  loginSuccess(){

    return this.correctInput;

  }

  missingValues(){

    return this.missingInput;

  }

}
