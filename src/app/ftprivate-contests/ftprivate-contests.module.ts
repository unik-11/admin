import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtprivateContestsRoutingModule } from './ftprivate-contests-routing.module';
import { FtprivateContestsComponent } from './ftprivate-contests.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [FtprivateContestsComponent],
  exports: [
    FtprivateContestsComponent
  ],
  imports: [
    CommonModule,
    FtprivateContestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class FtprivateContestsModule {
}
