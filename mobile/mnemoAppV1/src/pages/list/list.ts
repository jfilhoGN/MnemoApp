import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallSociologiaProvider } from '../../providers/call-sociologia/call-sociologia';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public obj: any;
  public result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callSociologiaProvider: CallSociologiaProvider) {
    this.getAll()
  }

  getAll() {
    this.callSociologiaProvider.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj.sociologia;
        //console.log(this.obj.historia.titulo);
      });
  }

  getDetalhes(id:number){
    this.navCtrl.push("DetalhesSociologiaPage", {
      id: id
    })
  }
}
