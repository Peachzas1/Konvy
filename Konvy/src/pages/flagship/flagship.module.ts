import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlagshipPage } from './flagship';

@NgModule({
  declarations: [
    FlagshipPage,
  ],
  imports: [
    IonicPageModule.forChild(FlagshipPage),
  ],
})
export class FlagshipPageModule {}
