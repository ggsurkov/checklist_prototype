import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldCarBuyChecklistPage } from './old-car-buy-checklist';

@NgModule({
  declarations: [
    OldCarBuyChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(OldCarBuyChecklistPage),
  ],
})
export class OldCarBuyChecklistPageModule {}
