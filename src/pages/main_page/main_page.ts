import { Component } from '@angular/core';
import { ProductsServiceProvider } from './../../providers/products-service/products-service';
import { NavController } from "ionic-angular";
import { SearchPage } from "../list/list";

@Component({
  selector: 'main-page',
  templateUrl: 'main_page.html'
})
export class MainPage {
  myInput: String;
  data:String;

  constructor(public navCtrl: NavController, public productServiceProvider: ProductsServiceProvider) {

  }

  searchButtonClicked(myInput: String) {
    this.myInput = myInput;

    this.productServiceProvider.getProducts().subscribe((data)=>{
      this.data = data.toString();
      this.navCtrl.push(SearchPage,{data: data}).then();
    });



  }
}
