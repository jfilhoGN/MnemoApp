import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CallSociologiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallSociologiaProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello CallSociologiaProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(
          `http://localhost:5000/sociologia`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getSociologiaById(id: number) {

    return new Promise(resolve => {
      this.http
        .get(`http://localhost:5000/sociologia/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          //console.log(this.data);
        });
    });
  }

}
