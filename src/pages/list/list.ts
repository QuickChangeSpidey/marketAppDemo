import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class SearchPage {
  private readonly products: [any];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.products = this.navParams.get('data')['products'];
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    }).then();
  }
}
