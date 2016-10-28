/**
 * Created by mar on 26/10/16.
 */
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/Rx');
require('rxjs/add/operator/map');
var SurveyService = (function () {
    function SurveyService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:9090/subjects'; // URL to web api
        // this.subjectsData = this.getSubjects();
        console.log(this.subjectsData);
    }
    SurveyService.prototype.subjects = function () {
        return this.subjectsData;
    };
    SurveyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SurveyService);
    return SurveyService;
}());
exports.SurveyService = SurveyService;
//# sourceMappingURL=survey.service.js.map