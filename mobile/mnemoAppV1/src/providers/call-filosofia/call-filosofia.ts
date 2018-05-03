import { Http } from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CallFilosofiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallFilosofiaProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello CallFilosofiaProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(
          `http://localhost:5000/filosofia`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getFilosofiaById(id: number) {

    return new Promise(resolve => {
      this.http
        .get(`http://localhost:5000/filosofia/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          //console.log(this.data);
        });
    });
  }

}
