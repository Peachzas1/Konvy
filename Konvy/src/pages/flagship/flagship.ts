import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the FlagshipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flagship',
  templateUrl: 'flagship.html',
})
export class FlagshipPage {
	slideData = [{ image: "../../assets/img/img1.jpg" },
  				{ image: "../../assets/img/img2.jpg" },
  				{ image: "../../assets/img/img3.jpg" }];
	LogoData = [{ image: "../../assets/img/Logo/Logo1.PNG" },
  			{ image: "../../assets/img/Logo/Logo2.PNG" },
  			{ image: "../../assets/img/Logo/Logo3.PNG" },
  			{ image: "../../assets/img/Logo/Logo4.PNG" },
  			{ image: "../../assets/img/Logo/Logo5.PNG" },
  			{ image: "../../assets/img/Logo/Logo6.PNG" },
  			{ image: "../../assets/img/Logo/Logo7.PNG" },
  			{ image: "../../assets/img/Logo/Logo8.PNG" }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlagshipPage');
  }

}
