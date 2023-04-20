import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FantasyPointsRoutingModule} from './ftfantasy-points-routing.module';
import {FtfantasyPointsComponent} from './ftfantasy-points.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';


@NgModule({
  declarations: [FtfantasyPointsComponent],
  imports: [
    CommonModule,
    FantasyPointsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgArrayPipesModule
  ]
})
export class FtfantasyPointsModule {
}
