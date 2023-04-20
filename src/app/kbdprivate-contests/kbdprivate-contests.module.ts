import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KbdprivateContestsRoutingModule } from './kbdprivate-contests-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { KbdprivateContestsComponent } from './kbdprivate-contests.component';


@NgModule({
  declarations: [KbdprivateContestsComponent],
  exports: [
    KbdprivateContestsComponent
  ],
  imports: [
    CommonModule,
    KbdprivateContestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class KbdprivateContestsModule {
}
