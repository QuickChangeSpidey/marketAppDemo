import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Screenshot } from '@ionic-native/screenshot';
import { MainPage } from '../pages/main_page/main_page';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { SearchResultPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsServiceProvider } from '../providers/products-service/products-service';
import { HttpClientModule } from '@angular/common/http';
import { ContactListPage } from '../pages/contact_list/contact-list';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    ItemDetailsPage,
    SearchResultPage,
    ContactListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ItemDetailsPage,
    SearchResultPage,
    ContactListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsServiceProvider
  ]
})
export class AppModule {}
