import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HkyprivateContestsRoutingModule } from './hkyprivate-contests-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { HkyprivateContestsComponent } from './hkyprivate-contests.component';


@NgModule({
  declarations: [HkyprivateContestsComponent],
  imports: [
    CommonModule,
    HkyprivateContestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule
  ]
})
export class HkyprivateContestsModule { }
