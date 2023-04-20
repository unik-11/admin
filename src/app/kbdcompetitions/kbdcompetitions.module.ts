import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KbdcompetitionsRoutingModule} from './kbdcompetitions-routing.module';
import {KbdcompetitionsComponent} from './kbdcompetitions.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DelayInputModule} from '../_directive/delay-input.module';
import { KbdcontestsComponent } from '../kbdcontests/kbdcontests.component';
import { KbdleaderboardComponent } from '../kbdleaderboard/kbdleaderboard.component';
// import { FtleaderboardComponent } from './ftleaderboard/ftleaderboard.component';
// import { FtleaderboardDetailsComponent } from './ftleaderboard/ftleaderboard-details/ftleaderboard-details.component';



@NgModule({
  declarations: [KbdcompetitionsComponent,KbdleaderboardComponent ],

  imports: [
    CommonModule,
    KbdcompetitionsRoutingModule,
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
export class KbdcompetitionsModule {
}
