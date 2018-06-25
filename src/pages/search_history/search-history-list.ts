import { Component } from '@angular/core';
import { SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { NavController} from "ionic-angular";
import { ProductsServiceProvider } from "../../providers/products-service/products-service";


@Component({
  selector: 'search-list-history',
  templateUrl: 'search-history-list.html'
})
export class SearchHistoryList {

  items:[any];

  constructor(public navCtrl: NavController, public productServiceProvider: ProductsServiceProvider, private sqlite: SQLite) {
    this.getDBData();
  }

  private getDBData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM searchHistory',{})
        .then(res => {

          console.log('Executed SQL');
          console.log(res);

          if(res.rows.length>0){
            for(let i=0; i <res.rows.length; i++) {
              this.items.push(res.rows.item(i).searchItem);
            }
          }
        })
        .catch(e => console.log(e));
    });
  }
}
