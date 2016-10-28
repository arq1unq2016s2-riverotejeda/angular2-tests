
/**
 * Created by mar on 26/10/16.
 */

import { Injectable }    from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Survey} from "./app.component";
import {Observable} from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class SurveyService {

    private heroesUrl = 'http://localhost:9090/subjects';  // URL to web api

    private subjectsData;
    constructor(private http: Http) {
        this.subjectsData = this.getSubjects();
        console.log(this.subjectsData);
    }

    subjects(){
        return this.subjectsData;
    }

    getSubjects() : Promise<Survey[]> {
      /* return this.http.get(this.heroesUrl).toPromise()
           .then(response => response.json().data as Survey[]);*/
       /* return this.http.get(this.heroesUrl)
            .map(res => <Survey[]> res.json())re
            .subscribe(data => this.subjectsData = data);*/
        fetch(this.heroesUrl).then((response) => {
            console.log(response.json())
            return response.json();
        }).then((data) => {
            this.subjectsData = data;
        }).catch((ex) => {
            console.error('Error fetching users', ex);
        });
    }

}