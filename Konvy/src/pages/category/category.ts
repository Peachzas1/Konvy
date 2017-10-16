import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDataProvider } from '../../providers/product-data/product-data';

/*
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
    Page: string = "Category"; // default button
  	searchProduct: string = '';
  	/*productList = [{image:"../../assets/img/product/acne-cleansing.PNG",name:"Acne Cleansing",type:"Acne-control & Tretment"},
                  {image:"../../assets/img/product/acne-moisturizer.PNG",name:"Acne Moisturizer",type:"Acne-control & Tretment"},
                  {image:"../../assets/img/product/acne-patch.PNG",name:"Acne Patch",type:"Acne-control & Tretment"},
                  {image:"../../assets/img/product/acne-skin-care.PNG",name:"Acne Skin Care",type:"Acne-control & Tretment"},
                  {image:"../../assets/img/product/acne-spot-gel.PNG",name:"Acne Spot Gel",type:"Acne-control & Tretment"},
                  {image:"../../assets/img/product/soap.PNG",name:"Soap",type:"Cleansing"},
                  {image:"../../assets/img/product/makeup-remover-tissue.PNG",name:"Makeup Remover Tissue",type:"Cleansing"},
                  {image:"../../assets/img/product/makeup-remover.PNG",name:"Makeup Remover",type:"Cleansing"},
                  {image:"../../assets/img/product/Fatcial Scrub.PNG",name:"Fatcial Scrub",type:"Cleansing"},
                  {image:"../../assets/img/product/Cleansing water.PNG",name:"Cleansing water",type:"Cleansing"},
                  {image:"../../assets/img/product/cleansing tissue.PNG",name:"Cleansing tissue",type:"Cleansing"},
                  {image:"../../assets/img/product/cream.PNG",name:"Cream",type:"Cream"},
                  {image:"../../assets/img/product/Day cream.PNG",name:"Day Cream",type:"Cream"},
                  {image:"../../assets/img/product/Multifunction cream.PNG",name:"Multifunction Cream",type:"Cream"},
                  {image:"../../assets/img/product/Night cream.PNG",name:"Night Cream",type:"Cream"},
                  ];*/
    productType = [{type:"Acne-control & Tretment"},
                    {type:"Cleansing"},{type:"cream"}]
  	constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:ProductDataProvider) {

	  }  

	ionViewDidLoad() {
 		//this.setFilteredItems();
    }

    /*setFilteredItems() {
        this.productList = this.dataService.filterItems(this.searchProduct);
    }*/
  
}


