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
  [{ image: "../../assets/img/img1.jpg" },
  { image: "../../assets/img/img2.jpg" },
  { image: "../../assets/img/img3.jpg" }]
}
