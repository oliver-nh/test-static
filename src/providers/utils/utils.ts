import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UtilsProvider Provider');
  }

  static isNumeric(num: any) {
    return !isNaN(num);
  }

  static convertSuffix(suffix) {
    return (suffix && suffix !== 'Select') ? suffix : '';
  }

  static setFullName(firstName: string, lastName: string, middleInitial?: string, suffix?: string) {
    let name: string = '';
    if (firstName && lastName) {
      name = firstName.trim();
      if (middleInitial && middleInitial.trim().length > 0) {
        name += ' ' + middleInitial.trim();
      }
      name += ' ' + lastName.trim();
      if (suffix && suffix.trim().length > 0) {
        name += ' ' + suffix.trim();
      }
    }
    return name;
  }

}
