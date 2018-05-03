import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilosofiaPage } from './filosofia';

@NgModule({
  declarations: [
    FilosofiaPage,
  ],
  imports: [
    IonicPageModule.forChild(FilosofiaPage),
  ],
})
export class FilosofiaPageModule {}
