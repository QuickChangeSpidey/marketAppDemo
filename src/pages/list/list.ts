import {Component, ViewChild} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import {ProductsServiceProvider} from "../../providers/products-service/products-service";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class SearchResultPage {

  @ViewChild(Content)
  content: Content;
  input: string;
  pageNumber: number;
  hideButton: boolean;
  hideSecondButton: boolean;
  private products: [any];

  constructor(public navCtrl: NavController, public navParams: NavParams, public productServiceProvider: ProductsServiceProvider) {
    this.pageNumber = 1;
    if(this.pageNumber==1){
      this.hideButton = false;
    }
    this.products = this.navParams.get('data')['products'];
    this.input = this.navParams.get('input');

    if(this.products.length<15){
      this.hideSecondButton = false;
    } else {
      this.hideSecondButton = true;
    }
  }

  itemTapped(event, item) {
    this.productServiceProvider.getProduct(item['id']).subscribe((data)=>{
      this.navCtrl.push(ItemDetailsPage, {
        data: data
      }).then();
    });

  }

  nextClick() {
    this.productServiceProvider.getProducts(this.input,this.pageNumber.toString(),'15').subscribe((data)=>{
      this.products = data['products'];
      this.pageNumber++;
      if(this.pageNumber>1){
        this.hideButton = true;
      }
      this.content.scrollToTop().then();
    });
  }

  backClick() {
    this.productServiceProvider.getProducts(this.input,this.pageNumber.toString(),'15').subscribe((data)=>{
      this.products = data['products'];
      this.pageNumber--;
      if(this.pageNumber==1){
        this.hideButton = false;
      }
      this.content.scrollToTop().then();
    });
  }
}
