import { Component } from '@angular/core';
import { SQLite, SQLiteObject} from "@ionic-native/sqlite";
import { NavController} from "ionic-angular";
import { ProductsServiceProvider } from "../../providers/products-service/products-service";
import { SearchResultPage } from "../list/list";


@Component({
  selector: 'search-list-history',
  templateUrl: 'search-history-list.html'
})
export class SearchHistoryList {

  names: Object[];
  constructor(public navCtrl: NavController, public productServiceProvider: ProductsServiceProvider, private sqlite: SQLite) {
    this.getDBData();
    this.names = [];
  }

  private getDBData() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM searchHistory',[])
        .then(res => {
          if (res.rows.length > 0) {
            for(let i=0; i <res.rows.length; i++) {
              this.names.push({
                id: res.rows.item(i).rowid,
                name: res.rows.item(i).searchItem,
                time: res.rows.item(i).date
              });
            }
          }
        })
        .catch(e => console.log(e));
    });
  }

  goToSearch(name:string) {
    console.log(name);
    this.productServiceProvider.getProducts(name,'0','15').subscribe((data)=>{
      console.log(data);
      this.navCtrl.push(SearchResultPage,{data: data,
        input:name }).then();
    });
  }
}
