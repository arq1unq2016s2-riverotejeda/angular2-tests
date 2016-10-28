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
require('rxjs/add/operator/map');
var Observable_1 = require('rxjs/Observable');
var DataService = (function () {
    function DataService(_http) {
        var _this = this;
        this._http = _http;
        this.GetAll = function () {
            return _this._http.get(_this.actionUrl).map(function (response) { return response.json(); });
        };
        this.actionUrl = 'http://localhost:9090/subjects';
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    /* public GetSingle = (id: number): Observable<MyTypedItem> => {
         return this._http.get(this.actionUrl + id)
             .map((response: Response) => <MyTypedItem>response.json())
             .catch(this.handleError);
     }
 
     public Add = (itemName: string): Observable<MyTypedItem> => {
         let toAdd = JSON.stringify({ ItemName: itemName });
 
         return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
             .map((response: Response) => <MyTypedItem>response.json())
             .catch(this.handleError);
     }
 
     public Update = (id: number, itemToUpdate: MyTypedItem): Observable<MyTypedItem> => {
         return this._http.put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers })
             .map((response: Response) => <MyTypedItem>response.json())
             .catch(this.handleError);
     }
 
     public Delete = (id: number): Observable<Response> => {
         return this._http.delete(this.actionUrl + id)
             .catch(this.handleError);
     }
 */
    DataService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map