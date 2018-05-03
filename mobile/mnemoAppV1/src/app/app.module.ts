import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FilosofiaPage } from '../pages/filosofia/filosofia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallHistoriaProvider } from '../providers/call-historia/call-historia';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import {  HttpModule } from '@angular/http';
import { CallSociologiaProvider } from '../providers/call-sociologia/call-sociologia';
import { CallFilosofiaProvider } from '../providers/call-filosofia/call-filosofia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FilosofiaPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FilosofiaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CallHistoriaProvider,
    CallSociologiaProvider,
    CallFilosofiaProvider
  ]
})
export class AppModule {}
