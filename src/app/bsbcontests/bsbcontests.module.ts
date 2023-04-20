import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsbcontestsRoutingModule } from './bsbcontests-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

import { BsbcontestsComponent } from './bsbcontests.component';
import { DetailComponent } from './detail/detail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';




@NgModule({
  declarations: [BsbcontestsComponent],
  exports: [
 BsbcontestsComponent
   ],
  imports: [
    CommonModule,
    BsbcontestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ]
})
export class BsbcontestsModule { }
