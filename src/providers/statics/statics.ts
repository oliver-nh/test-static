import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StaticsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticsProvider {

  static isNumeric(num: any) {
    return !isNaN(num);
  }

  constructor(public http: HttpClient) {
    console.log('Hello StaticsProvider Provider');
  }

}
