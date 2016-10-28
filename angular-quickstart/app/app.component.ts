import { Component } from '@angular/core';
import  {SurveyService} from './survey.service'
import {Http, HttpModule} from "@angular/http";



@Component({
  selector: 'my-app',
  template: '<h1>My First Angular App</h1>'
})
export class Survey {
  id: number;
  subject_name: string;
  date: any;
  options: any;


  constructor (private http: Http){
   var  ss = new SurveyService(http);
  //  console.log(ss.subjects());
    //console.log(ss.getSubjects());
  }

}