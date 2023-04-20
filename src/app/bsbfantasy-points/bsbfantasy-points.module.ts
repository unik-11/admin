import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsbfantasyPointsRoutingModule } from './bsbfantasy-points-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';

import { BsbfantasyPointsComponent } from './bsbfantasy-points.component';

@NgModule({
  declarations: [BsbfantasyPointsComponent],
  imports: [
    CommonModule,
    BsbfantasyPointsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgArrayPipesModule
  ]
})
export class BsbfantasyPointsModule { }
