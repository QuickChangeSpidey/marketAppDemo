import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { AlertController } from 'ionic-angular';
import { ContactListPage } from "../contact_list/contact-list";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  screen: any;
  state: boolean = false;
  alert:AlertController;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,private screenshot: Screenshot) {
    this.selectedItem = navParams.get('data');
    this.alert = alertCtrl;

  }

  takeScreenshot() {
    this.alert.create({
      title: 'New Screenshot?',
      message: "Enter a name for this new Screenshot you're so keen on adding",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name of screenshot file',

        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log(data);
          }
        },
        {
          text: 'Save',
          handler: data => {
            setTimeout(() => {
              this.screenshot.save('jpg', 80, data.Name).then(res => {
              this.screen = res.filePath;
              this.state = true;
              this.reset();
              });
            }, 500);
          }
        }
      ]
    }).present().then();
  }

  sendToContact() {
    if (this.selectedItem['links'][0]['href'] != null) {
      this.navCtrl.push(ContactListPage, {'refUrl': this.selectedItem['links'][0]['href']}).then();
    }
  }



  reset() {
    var self = this;
    setTimeout(function(){
      self.state = false;
    }, 1000);
  }

}
