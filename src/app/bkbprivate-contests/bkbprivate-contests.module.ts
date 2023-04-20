import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BkbprivateContestsRoutingModule } from './bkbprivate-contests-routing.module';
import { BkbprivateContestsComponent } from './bkbprivate-contests.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [BkbprivateContestsComponent],
  imports: [
    CommonModule,
    BkbprivateContestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule



  ]
})
export class BkbprivateContestsModule { }
