import { Component } from '@angular/core';
import { ProductsServiceProvider } from './../../providers/products-service/products-service';
import { NavController } from "ionic-angular";
import { SearchResultPage } from "../list/list";

@Component({
  selector: 'main-page',
  templateUrl: 'main_page.html'
})
export class MainPage {
  constructor(public navCtrl: NavController, public productServiceProvider: ProductsServiceProvider) {
   this.productServiceProvider.getProductCategories().subscribe((data)=>{
   });
  }

  searchButtonClicked(myInput: string) {
    this.productServiceProvider.getProducts(myInput,'0','15').subscribe((data)=>{
      this.navCtrl.push(SearchResultPage,{data: data,
      input:myInput }).then();
    });
  }
}
