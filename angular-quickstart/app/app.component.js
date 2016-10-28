"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
require('rxjs/Rx');
var data_service_1 = require("./data.service");
var Survey = (function () {
    function Survey(http, _dataService) {
        this.http = http;
        this._dataService = _dataService;
        // var  ss = new DataService(http);
        //  console.log(ss.subjects());
        //console.log(ss.getSubjects());
        //console.log(this.subjects);
        //  this.ngOnInit();
        //console.log('constructor');
        this.loading = true;
        // if(!(this.loading)) {    console.log(this.subjects)};
    }
    Survey.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.GetAll()
            .subscribe(function (data) { return _this.mySubjects = data; }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP GET Service"); }, // in case of failure show this message
        function () { return console.log("Job Done Get !"); } //run this code in all cases
         //run this code in all cases
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
    };
    Survey.prototype.getSubjects = function () {
        var _this = this;
        this._dataService.GetAll()
            .subscribe(function (data) { return _this.mySubjects = JSON.stringify(data); }, // put the data returned from the server in our variable
        function (// put the data returned from the server in our variable
            error) { return console.log("Error HTTP GET Service"); }, // in case of failure show this message
        function () { return console.log("Job Done Get !"); } //run this code in all cases
         //run this code in all cases
        );
        /*return this._dataService.GetAll().subscribe(res =>  {this.subjects = res, console.log(this.subjects), this.loading =false});*/
    };
    Survey = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.template.html',
            //'<h1>H</h1>',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [http_1.Http, data_service_1.DataService])
    ], Survey);
    return Survey;
}());
exports.Survey = Survey;
//# sourceMappingURL=app.component.js.map