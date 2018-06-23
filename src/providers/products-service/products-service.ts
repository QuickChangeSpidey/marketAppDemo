import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ProductsServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProductsServiceProvider Provider');
  }

  getProducts(){
    return this.http.get('https://api.shop.com/AffiliatePublisherNetwork/v1/categories?publisherID=TEST&locale=en_US'
    , {
        params: {
          apikey: 'l7xx250eec54e6034e87b2e81ac7acf808bd'
        }
     });
  }
}
