import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  slideData =
  [{ image: "../../assets/img/img1.jpeg" },
  { image: "../../assets/img/img2.jpeg" },
  { image: "../../assets/img/img3.jpeg" }]
}
