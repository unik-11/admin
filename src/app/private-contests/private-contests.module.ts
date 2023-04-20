import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateContestsRoutingModule } from './private-contests-routing.module';
import { PrivateContestsComponent } from './private-contests.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import {DelayInputModule} from '../_directive/delay-input.module';



@NgModule({
  declarations: [PrivateContestsComponent],
  exports: [
    PrivateContestsComponent
  ],
  imports: [
    CommonModule,
    PrivateContestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    DelayInputModule,
    MatIconModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class PrivateContestsModule {
}
