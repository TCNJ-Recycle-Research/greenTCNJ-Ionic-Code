import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-campusresources',
  templateUrl: './campusresources.page.html',
  styleUrls: ['./campusresources.page.scss'],
})
export class CampusresourcesPage{

  campusResources: {id: any, name: any, link: any}[] = [];

  constructor(public http: HttpClient, private router: Router) {
    this.getAllResources();
   }

  //  (`resource_id`, `resource_name`, `resource_link`)


  getAllResources(){
    var obj = {func: "get_all_resources"};
            
    this.http.post("https://recycle.hpc.tcnj.edu/php/resources-handler.php", JSON.stringify(obj)).subscribe(data => {
    
        var result = data as any[];

        console.log(result[0]["resourceName"]);
 
        for(var i = 0; i < result.length; i++){

        var linkTst = result[i]["resourceLink"];

          this.campusResources.push({id: result[i]["resourceID"], name: result[i]["resourceName"], link: linkTst});
        }

    });

  }

} 
