import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencerRoutingModule } from './influencer-routing.module';
import { InfluencerComponent } from './influencer.component';
import {MatButtonModule} from '@angular/material/button';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import { InfluencerdetailComponent } from './influencerdetail/influencerdetail.component';
import {DelayInputModule} from '../_directive/delay-input.module';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [InfluencerComponent, InfluencerdetailComponent],
  imports: [
    CommonModule,
    InfluencerRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    DelayInputModule
  ]
})
export class InfluencerModule { }
