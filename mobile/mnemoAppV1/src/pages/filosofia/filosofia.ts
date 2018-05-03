import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallFilosofiaProvider } from '../../providers/call-filosofia/call-filosofia';

/**
 * Generated class for the FilosofiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-filosofia',
  templateUrl: 'filosofia.html',
})
export class FilosofiaPage {

  public obj: any;
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callFilosofiaProvider: CallFilosofiaProvider) {
    this.getAll()
  }

  getAll() {
    this.callFilosofiaProvider.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj.filosofia;
        //console.log(this.obj.historia.titulo);
      });
  }

  getDetalhes(id:number){
    this.navCtrl.push("DetalhesFilosofiaPage", {
      id: id
    })
  }

}
