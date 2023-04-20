import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsbcompetitionsRoutingModule } from './bsbcompetitions-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DelayInputModule} from '../_directive/delay-input.module';
import { BsbcompetitionsComponent } from './bsbcompetitions.component';

import { BsbleaderboardComponent } from './bsbleaderboard/bsbleaderboard.component';

// import { BkbleaderboardComponent } from './bkbleaderboard/bkbleaderboard.component';

@NgModule({
  declarations: [BsbcompetitionsComponent,  BsbleaderboardComponent],
  imports: [
    CommonModule,
    BsbcompetitionsRoutingModule,
    CommonModule,
    // BkbcompetitionsRoutingModule,
    MatPaginatorModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    FormsModule,
    DelayInputModule,


  ]
})
export class BsbcompetitionsModule { }
