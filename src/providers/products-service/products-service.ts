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

  getProductCategories(){
    return this.http.get('https://api.shop.com/AffiliatePublisherNetwork/v1/categories?publisherID=TEST&locale=en_US'
    , {
        params: {
          apikey: 'l7xx250eec54e6034e87b2e81ac7acf808bd'
        }
     });
  }

  getProducts(input:string, start:string, perPage:string){

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('start', start);
    urlSearchParams.append('perPage', perPage);
    urlSearchParams.append('term', input);
    urlSearchParams.append('publisherID','TEST');
    urlSearchParams.append('locale','en_US');

    return this.http.get('https://api.shop.com/AffiliatePublisherNetwork/v1/products?'+urlSearchParams
      , {
        params: {
          apikey: 'l7xx250eec54e6034e87b2e81ac7acf808bd'
        }
      });

  }
}
