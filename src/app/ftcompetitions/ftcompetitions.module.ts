import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FtcompetitionsRoutingModule} from './ftcompetitions-routing.module';
import {FtcompetitionsComponent} from './ftcompetitions.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DelayInputModule} from '../_directive/delay-input.module';
import { FtleaderboardComponent } from './ftleaderboard/ftleaderboard.component';
import { FtleaderboardDetailsComponent } from './ftleaderboard/ftleaderboard-details/ftleaderboard-details.component';


@NgModule({
  declarations: [FtcompetitionsComponent, FtleaderboardComponent,FtleaderboardDetailsComponent],
  imports: [
    CommonModule,
    FtcompetitionsRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
    FormsModule,
    MatPaginatorModule,
    DelayInputModule
  ]
})
export class FtcompetitionsModule {
}
