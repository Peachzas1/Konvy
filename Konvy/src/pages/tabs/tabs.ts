
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AccountPage } from './../account/account';
import { CartPage } from './../cart/cart';
import { FlagshipPage } from './../flagship/flagship';
import { CategoryPage } from './../category/category';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = FlagshipPage;
  tab4Root = CartPage;
  tab5Root = AccountPage;
  

  constructor() {

  }
}
