import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FteditTeamRoutingModule } from './ftedit-team-routing.module';
import { FteditTeamComponent } from './ftedit-team.component';
import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [FteditTeamComponent],
  imports: [
    CommonModule,
    FteditTeamRoutingModule,
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
export class FteditTeamModule { }
