import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';


@Component({
  selector: 'contact-list-details',
  templateUrl: 'contact-list.html'
})
export class ContactListPage {

  link:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts){
    this.link = navParams.get('refUrl');
    console.log(this.link);
  }


}
