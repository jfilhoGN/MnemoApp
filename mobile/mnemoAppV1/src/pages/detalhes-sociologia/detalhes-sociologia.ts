import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallSociologiaProvider} from "../../providers/call-sociologia/call-sociologia";
import {SociologiaDetalhes} from "/home/jfilho/Documentos/Git/MnemoApp/mobile/mnemoAppV1/src/app/models/sociologiaDetalhes";

/**
 * Generated class for the DetalhesSociologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes-sociologia',
  templateUrl: 'detalhes-sociologia.html',
})
export class DetalhesSociologiaPage {
  public id;
  public obg: any;
  public detalhes : SociologiaDetalhes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public callSociologiaProvider: CallSociologiaProvider) {
    this.id = navParams.get("id");
    this.detalhes = new SociologiaDetalhes;

    this.callSociologiaProvider.getSociologiaById(this.id).then(data => {
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
    console.log('ionViewDidLoad DetalhesSociologiaPage');
  }

}
