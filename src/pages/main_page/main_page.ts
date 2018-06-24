import { Component } from '@angular/core';
import { ProductsServiceProvider } from './../../providers/products-service/products-service';
import { NavController } from "ionic-angular";
import { SearchPage } from "../list/list";

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
      this.navCtrl.push(SearchPage,{data: data}).then();
    });

  }
}
