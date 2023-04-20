import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsbprivateContestsRoutingModule } from './bsbprivate-contests-routing.module';



import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { BsbprivateContestsComponent } from './bsbprivate-contests.component';


@NgModule({
  declarations: [BsbprivateContestsComponent],
  imports: [
    CommonModule,
    BsbprivateContestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule

  ]
})
export class BsbprivateContestsModule { }
