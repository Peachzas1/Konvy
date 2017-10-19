import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }
  public swipe: number = 0;
  public count : number = 0;
  slideData =
  [{ image: "../../assets/img/img1.jpg"},
  { image: "../../assets/img/img2.jpg" },
  { image: "../../assets/img/img3.jpg" }]

  Pages = [

  		{p:"Home"},
  		{p:"New"},
  		{p:"Flagship Store"},
  		{p:"Counter Brand"},
  		{p:"Buy 1 Get 1"},
  		{p:"Redeem"},
  		

  ]
   swipeEvent(e) {
   	this.swipe++;
   	if(this.swipe%2!=0)
   		this.count = 3;
   	else 
   		this.count = 0;
   
   return this.count;
	}
}

