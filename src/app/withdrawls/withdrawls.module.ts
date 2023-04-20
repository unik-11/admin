import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithdrawlsRoutingModule } from './withdrawls-routing.module';
import { WithdrawlsComponent } from './withdrawls.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { DelayInputModule } from '../_directive/delay-input.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';




@NgModule({
  declarations: [WithdrawlsComponent],
  exports: [
    WithdrawlsComponent
  ],
  imports: [
    CommonModule,
    WithdrawlsRoutingModule,
    MatToolbarModule,
    FormsModule,
    DelayInputModule,
    MatChipsModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
  ]
})
export class WithdrawlsModule {
}
