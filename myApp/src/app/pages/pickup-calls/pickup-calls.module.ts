import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallsPageRoutingModule } from './pickup-calls-routing.module';

import { PickupCallsPage } from './pickup-calls.page';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallsPageRoutingModule
  ],
  declarations: [
    PickupCallsPage,
    PickupCallCardComponent
  ]
})
export class PickupCallsPageModule {}
