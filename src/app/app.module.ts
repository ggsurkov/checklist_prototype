import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {OldCarBuyChecklistPageModule} from "../pages/checklists/old-car-buy-checklist/old-car-buy-checklist.module";
import {PipesModule} from "../pipes/pipes.module";
import {CrudChecklistProvider} from "../providers/crud-checklist.provider";
import {UserProvider} from "../providers/user.provider";
import {Md5} from "ts-md5";
import {IonicStorageModule} from "@ionic/storage";
import {IntroPageModule} from "../pages/intro/intro.module";

declare let require: any;
const localforage: LocalForage = require("localforage");

@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    PipesModule,
    OldCarBuyChecklistPageModule,
    IntroPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Md5,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CrudChecklistProvider,
    UserProvider
  ]
})
export class AppModule {}
