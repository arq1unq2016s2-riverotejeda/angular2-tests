import {Component, OnInit} from '@angular/core';
import {Http, HttpModule} from "@angular/http";
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {DataService} from "./data.service";


@Component({
  selector: 'my-app',
  template: '<h1>H</h1>',
    providers: [DataService]

})
export class Survey implements  OnInit{

    public subjects;

  constructor (private http: Http, private _dataService: DataService){
  // var  ss = new DataService(http);
  //  console.log(ss.subjects());
    //console.log(ss.getSubjects());
      //console.log(this.subjects);
    this.ngOnInit();
    console.log('constructor');
  }


  ngOnInit(){
    this._dataService
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
    console.log('ngOnInit');

  }

}