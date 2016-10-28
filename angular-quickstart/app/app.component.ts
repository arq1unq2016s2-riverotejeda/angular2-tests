import {Component, OnInit} from '@angular/core';
import {Http, HttpModule} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {DataService} from "./data.service";




@Component({
  selector: 'my-app',

  templateUrl: 'app/app.template.html',
      //'<h1>H</h1>',
    providers: [DataService]

})
export class Survey implements  OnInit{

    public mySubjects :string;
    public loading : Boolean;


  constructor (private http: Http, private _dataService: DataService){

  // var  ss = new DataService(http);
  //  console.log(ss.subjects());
    //console.log(ss.getSubjects());
      //console.log(this.subjects);
  //  this.ngOnInit();
    //console.log('constructor');
    this.loading = true;
   // if(!(this.loading)) {    console.log(this.subjects)};

  }



  ngOnInit(){

      this._dataService.GetAll()
          .subscribe(
              data => this.mySubjects= data, // put the data returned from the server in our variable
              error => console.log("Error HTTP GET Service"), // in case of failure show this message
              () => console.log("Job Done Get !")//run this code in all cases
          );

   /* this._dataService
        .GetAll()
        .subscribe(data => {this.subjects = data,  console.log(this.subjects);},
            error => console.log(error)
            );
    /*this._dataService
        .GetAll()
        .subscribe(data => console.log(data));
           /* error => console.log(error),
            () => {
              this._toasterService.pop('success', 'Complete', 'Getting all values complete');
              this._slimLoadingBarService.complete();
            });
            "typings": "^1.4.0"
            */
//      console.log(this.subjects);
 //   console.log('ngOnInit');

  /*  this.getSubjects();
  /*  while (this.loading) {
      console.log('cargando...');
    }*/
   /* if(!(this.loading)) {    console.log(this.subjects)};
    console.log(this.subjects);*/

  }

  getSubjects() {
      this._dataService.GetAll()
          .subscribe(
              data => this.mySubjects= JSON.stringify(data), // put the data returned from the server in our variable
              error => console.log("Error HTTP GET Service"), // in case of failure show this message
              () => console.log("Job Done Get !")//run this code in all cases
          );






   /*return this._dataService.GetAll().subscribe(res =>  {this.subjects = res, console.log(this.subjects), this.loading =false});*/

  }


}