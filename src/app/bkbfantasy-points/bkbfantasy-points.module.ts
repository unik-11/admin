import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BkbfantasyPointsRoutingModule } from './bkbfantasy-points-routing.module';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';
import { BkbfantasyPointsComponent } from './bkbfantasy-points.component';


@NgModule({
  declarations: [BkbfantasyPointsComponent],
  imports: [
    CommonModule,
    BkbfantasyPointsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgArrayPipesModule
  ]
})
export class BkbfantasyPointsModule { }
