import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KbdeditTeamRoutingModule } from './kbdedit-team-routing.module';
import { KbdeditTeamComponent } from './kbdedit-team.component';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [KbdeditTeamComponent],
  imports: [
    CommonModule,
    KbdeditTeamRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    NgArrayPipesModule,
    MatCheckboxModule
  ]
})
export class KbdeditTeamModule { }
