import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Survey }   from './app.component';
import {Http, HttpModule} from "@angular/http";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";



@NgModule({
  imports:      [ BrowserModule, HttpModule ],
 declarations: [ Survey ],
  bootstrap:    [ Survey ]

})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);