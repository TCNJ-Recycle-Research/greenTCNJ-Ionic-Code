import { Component, OnInit, Renderer2 } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { Router, NavigationExtras  } from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage {

  public form = [
    { val: 'Recycling', isChecked: false },
    { val: 'Water Conservation', isChecked: false },
    { val: 'Pollution Prevention', isChecked: false },
    { val: 'Energy', isChecked: false }
  ];

  userID: any;
  recycling: any;
  water: any;
  pollution: any;
  energy: any;

  buttonDisabled: any;

  constructor(private authService: AuthenticationService, private router: Router, private renderer: Renderer2, private storage: Storage, public http: HttpClient) { 

    storage.get('userID').then((val) => {
      this.userID = val;
    });

    this.buttonDisabled = true;
    this.loadInterests();
  }

  // Trigger global dark/light theming, by passing event as a parameter to this function
  toggleTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark')
    }
    else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

  loadInterests(){
    
    this.storage.get('userRecyclingInterest').then((val) => {
      this.recycling = val;

      if(val == 0 || val == null){
        this.form[0].isChecked = false;
      }else{
        this.form[0].isChecked = true;
      }
    });

    this.storage.get('userWaterInterest').then((val) => {
      this.water = val;

      if(val == 0 || val == null){
        this.form[1].isChecked = false;
      }else{
        this.form[1].isChecked = true;
      }
    });

    this.storage.get('userPollutionInterest').then((val) => {
      this.pollution = val;

      if(val == 0 || val == null){
        this.form[2].isChecked = false;
      }else{
        this.form[2].isChecked = true;
      }
    });

    this.storage.get('userEnergyInterest').then((val) => {
      this.energy = val;

      if(val == 0 || val == null){
        this.form[3].isChecked = false;
      }else{
        this.form[3].isChecked = true;
      }
    });

    this.buttonDisabled = true;
  }

  boxChecked(item){
    //check item.user and do stuff
    // enables update user interests if a box has been altered
    this.buttonDisabled = false;
  }

  updateUserInterests(){

    if(this.form[0].isChecked){
      this.recycling = 1;
    }else{
      
      this.recycling = 0;
    }

    if(this.form[1].isChecked){
      this.water = 1;
    }else{
      this.water = 0;
    }

    if(this.form[2].isChecked){
      this.pollution = 1;
    }else{
      this.pollution = 0;
    }

    if(this.form[3].isChecked){
      this.energy = 1;
    }else{
      this.energy = 0;
    }

   var obj = {func: "edit_user_interests", userID: this.userID, recyclingInterest: this.recycling, waterInterest: this.water, pollutionInterest: this.pollution, energyInterest: this.energy};

    this.http.post("https://recycle.hpc.tcnj.edu/php/users-handler.php", JSON.stringify(obj)).subscribe(data => {
    
        var result = data as any[];

        if(result['missingInput']){
          // output to user it succeeded and move to next page
          console.log("missing Input");

        } else {
          this.storage.set('userRecyclingInterest', this.recycling);
          this.storage.set('userWaterInterest', this.water);
          this.storage.set('userPollutionInterest', this.pollution);
          this.storage.set('userEnergyInterest', this.energy);
          this.buttonDisabled = true;

        }
    });

  }


  async logout() {
    // clears local storage 
    this.storage.clear();
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  onClick(event){
    if(event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    }
    else{
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }
}
