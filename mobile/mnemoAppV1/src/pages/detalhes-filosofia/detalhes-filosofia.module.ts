import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesFilosofiaPage } from './detalhes-filosofia';

@NgModule({
  declarations: [
    DetalhesFilosofiaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesFilosofiaPage),
  ],
})
export class DetalhesFilosofiaPageModule {}
