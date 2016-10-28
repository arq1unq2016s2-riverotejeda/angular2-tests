import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Survey}   from './app.component';
import {Http, HttpModule} from "@angular/http";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";


import {RouterModule} from '@angular/router';


import {JsonpModule} from '@angular/http';

import {DataService} from './data.service';


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [Survey],
    providers: [

        DataService,
    ],
    bootstrap: [Survey]

})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);