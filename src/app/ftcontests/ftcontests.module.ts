import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtbContestsRoutingModule } from './ftcontests-routing.module';
import { FtcontestsComponent } from './ftcontests.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [FtcontestsComponent],
  exports: [
    FtcontestsComponent
  ],
  imports: [
    CommonModule,
    FtbContestsRoutingModule,
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
export class FtcontestsModule {
}
