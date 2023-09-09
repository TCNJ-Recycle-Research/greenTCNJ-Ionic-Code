import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage{

  // array thet holds an id number, the link name and the actual link specified by admins in the web portal
  campusResources: {id: any, name: any, link: any}[] = [];

  constructor(public http: HttpClient, private router: Router) {
    //loads the getAllResources function in the constructor
    this.getAllResources();
   }

   // function to call php function to get list of resources
  getAllResources(){

    // php function call, does not require passing any parameters
    var obj = {func: "get_all_resources"};
    
    // calling the function in the recources-handpler.php script 
    this.http.post("https://recycle.hpc.tcnj.edu/php/resources-handler.php", JSON.stringify(obj)).subscribe(data => {
    
        var result = data as any[];

        // pushes campus resources into the created array
        for(var i = 0; i < result.length; i++){
          this.campusResources.push({id: result[i]["resourceID"], name: result[i]["resourceName"], link: result[i]["resourceLink"]});
        }

    });

  }

} 
