
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { AccountPage } from './../pages/account/account';
import { CartPage } from './../pages/cart/cart';
import { FlagshipPage } from './../pages/flagship/flagship';
import { CategoryPage } from './../pages/category/category';
import { TabsPage } from '../pages/tabs/tabs';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductDataProvider } from '../providers/product-data/product-data';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CategoryPage,
    FlagshipPage,
    CartPage,
    AccountPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CategoryPage,
    FlagshipPage,
    CartPage,
    AccountPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductDataProvider
  ]
})
export class AppModule {}
