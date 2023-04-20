import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BkbleaderboardRoutingModule } from './bkbleaderboard-routing.module';
import { BkbleaderboardDetailsComponent } from './bkbleaderboard-details/bkbleaderboard-details.component';


@NgModule({
  declarations: [
    BkbleaderboardDetailsComponent
  ],
  imports: [
    CommonModule,
    BkbleaderboardRoutingModule
  ]
})
export class BkbleaderboardModule { }
