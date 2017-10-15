import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductDataProvider {
  constructor(public http: Http) {
    console.log('Hello ProductDataProvider Provider');
  /*filterItems(searchProduct:any){
  	let serval = searchProduct.target.value;
  	if(serval && serval.trim()!=""){
		this.productList = this.productList.filter((product) => {
    		return product.name.toLowerCase().indexOf(serval.toLowerCase()) > -1;
        	});    
	}*/
  }
}
