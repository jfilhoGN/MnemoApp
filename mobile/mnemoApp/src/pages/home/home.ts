import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallHistoriaProvider } from '../../providers/call-historia/call-historia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(public navCtrl: NavController, public callHistoria: CallHistoriaProvider) {
    this.getAll();
  }

  getAll() {
    this.callHistoria.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj._embedded.episodes;
      });
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

}
