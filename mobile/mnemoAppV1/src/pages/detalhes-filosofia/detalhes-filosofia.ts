import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallFilosofiaProvider} from "../../providers/call-filosofia/call-filosofia";
import {FilosofiaDetalhes} from "/home/jfilhogn/Documentos/Git/MnemoApp/mobile/mnemoAppV1/src/app/models/filosofiaDetalhes";

/**
 * Generated class for the DetalhesFilosofiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-filosofia',
  templateUrl: 'detalhes-filosofia.html',
})
export class DetalhesFilosofiaPage {

  public id;
  public obg: any;
  public detalhes : FilosofiaDetalhes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callFilosofiaProvider: CallFilosofiaProvider) {
    this.id = navParams.get("id");
    this.detalhes = new FilosofiaDetalhes;

    this.callFilosofiaProvider.getFilosofiaById(this.id).then(data => {
      this.obg = data;
      this.detalhes.id = this.obg.id;
      this.detalhes.texto = this.obg.texto;
      this.detalhes.titulo = this.obg.titulo;
      this.detalhes.url_figura1 = this.obg.url_figura1;
      this.detalhes.url_figura2 = this.obg.url_figura2;
      //console.log(this.detalhes);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesFilosofiaPage');
  }

}
