import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallHistoriaProvider} from "../../providers/call-historia/call-historia";
import {HistoriaDetalhes} from "/home/jfilho/Documentos/Git/MnemoApp/mobile/mnemoAppV1/src/app/models/historiaDetalhes";

/**
 * Generated class for the DetalhesHistoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-historia',
  templateUrl: 'detalhes-historia.html',
})
export class DetalhesHistoriaPage {
  public id;
  public obg: any;
  public detalhes : HistoriaDetalhes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callHistoriaProvider: CallHistoriaProvider) {
    this.id = navParams.get("id");
    this.detalhes = new HistoriaDetalhes;

    this.callHistoriaProvider.getHistoriaById(this.id).then(data => {
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
    console.log('ionViewDidLoad DetalhesHistoriaPage');
  }

}
