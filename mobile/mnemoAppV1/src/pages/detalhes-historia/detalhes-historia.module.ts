import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesHistoriaPage } from './detalhes-historia';

@NgModule({
  declarations: [
    DetalhesHistoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesHistoriaPage),
  ],
})
export class DetalhesHistoriaPageModule {}
