import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KbdcontestsRoutingModule } from './kbdcontests-routing.module';

import { KbdcontestsComponent } from './kbdcontests.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [KbdcontestsComponent],
  exports: [
    KbdcontestsComponent
  ],
  imports: [
    CommonModule,
    KbdcontestsRoutingModule,
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
export class KbdcontestsModule { }
