import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HkyfantasyPointsRoutingModule } from './hkyfantasy-points-routing.module';




import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';
import { HkyfantasyPointsComponent } from './hkyfantasy-points.component';


@NgModule({
  declarations: [HkyfantasyPointsComponent],
  imports: [
    CommonModule,
    HkyfantasyPointsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgArrayPipesModule
  ]
})
export class HkyfantasyPointsModule { }
