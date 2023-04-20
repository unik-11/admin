import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BkbcontestsRoutingModule } from './bkbcontests-routing.module';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BkbcontestsComponent } from './bkbcontests.component';
import { DetailComponent } from './detail/detail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [BkbcontestsComponent],
  exports: [
   BkbcontestsComponent
  ],
  imports: [
    CommonModule,
    BkbcontestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class BkbcontestsModule { }
