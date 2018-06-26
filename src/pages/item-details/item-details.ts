import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { AlertController, ToastController } from 'ionic-angular';
import { Contacts } from "@ionic-native/contacts";
import { SMS } from "@ionic-native/sms";


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  screen: any;
  state: boolean = false;
  alert:AlertController;
  contactList: Contacts;
  message: SMS;

  constructor(private toastCtrl: ToastController, private sms: SMS, public alertCtrl: AlertController, private contacts: Contacts ,public navCtrl: NavController, public navParams: NavParams,private screenshot: Screenshot) {
    this.selectedItem = navParams.get('data');
    this.alert = alertCtrl;
    this.message = sms;
    this.contactList = contacts;
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
      this.contactList.pickContact().then((contact) => {
        var phoneNumber = contact.phoneNumbers[0].value;
        this.message.send(phoneNumber,
          this.selectedItem['links'][0]['href'] + " Hey! Checkout this cool product listing on shop.com"
          ,).then((result) => {
          let successToast = this.toastCtrl.create({
            message: "Text message sent successfully! :)",
            duration: 3000
          })
          successToast.present();
        }, (error) => {
          let errorToast = this.toastCtrl.create({
            message: "Text message not sent. :(",
            duration: 3000
          })
          errorToast.present();
        });
      }, () => {
        console.log("rejected");
      });
    }
  }

  reset() {
    var self = this;
    setTimeout(function(){
      self.state = false;
    }, 1000);
  }

}
