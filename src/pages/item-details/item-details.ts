import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Screenshot } from '@ionic-native/screenshot';

import {Contacts} from '@ionic-native/contacts'

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  screen: any;
  state: boolean = false;
  contactsFound: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private screenshot: Screenshot, private contacts: Contacts) {
    this.selectedItem = navParams.get('data');
  }

  takeScreenshot() {
    //check if filename exists if yes create new name popup
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(res => {
      this.screen = res.filePath;
      this.state = true;
      this.reset();
    });
  }

  sendToContact() {

    this.contacts.find(["displayName", "phoneNumbers"], {multiple: true}).then((contacts) => {
      this.contactsFound = contacts;
      console.log(this.contactsFound);
    })

  }


  reset() {
    var self = this;
    setTimeout(function(){
      self.state = false;
    }, 1000);
  }

}
