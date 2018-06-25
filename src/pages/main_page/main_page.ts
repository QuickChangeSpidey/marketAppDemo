import { Component } from '@angular/core';
import { ProductsServiceProvider } from './../../providers/products-service/products-service';
import { NavController } from "ionic-angular";
import { SearchResultPage } from "../list/list";
import { SQLite, SQLiteObject} from "@ionic-native/sqlite";

@Component({
  selector: 'main-page',
  templateUrl: 'main_page.html'
})
export class MainPage {
  constructor(public navCtrl: NavController, public productServiceProvider: ProductsServiceProvider,  private sqlite: SQLite) {
   this.productServiceProvider.getProductCategories().subscribe((data)=>{
   });

   this.createDB();

  }

  searchButtonClicked(myInput: string) {
    this.productServiceProvider.getProducts(myInput,'0','15').subscribe((data)=>{
      this.navCtrl.push(SearchResultPage,{data: data,
      input:myInput }).then();
    });
   this.makeDBEntry(myInput);
  }

  private createDB() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS searchHistory(rowid INTEGER PRIMARY KEY, searchItem TEXT, date TEXT)', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));

    });
  }

  private makeDBEntry(myInput: string) {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO searchHistory (searchItem, date) VALUES ('+myInput+'+'+new Date().toDateString()+')', {})
        .then(res => console.log('Executed SQL'))
        .catch(e => console.log(e));

    });
  }
}
