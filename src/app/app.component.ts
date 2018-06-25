import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { MainPage } from '../pages/main_page/main_page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SearchHistoryList } from "../pages/search_history/search-history-list";


@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  @ViewChild(Nav) nav: Nav;

  // make MainPage the root (or first) page
  rootPage = MainPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  )

  {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Shopping Search', component: MainPage },
      { title: 'Search History', component: SearchHistoryList }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close().then();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component).then();
  }
}
