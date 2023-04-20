import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KbdfantasyPointsRoutingModule } from './kbdfantasy-points-routing.module';
import {KbdfantasyPointsComponent} from './kbdfantasy-points.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';


@NgModule({
  declarations: [KbdfantasyPointsComponent],
  imports: [
    CommonModule,
    KbdfantasyPointsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgArrayPipesModule
  
  ]
})
export class KbdfantasyPointsModule { }
