import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BkbearningManagerRoutingModule } from './bkbearning-manager-routing.module';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {PaymentsModule} from '../payments/payments.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';
import {ImageViewerModule} from '@hallysonh/ngx-imageviewer';
import {DelayInputModule} from '../_directive/delay-input.module';
import { BkbearningManagerComponent } from './bkbearning-manager.component';

@NgModule({
  declarations: [BkbearningManagerComponent],
  imports: [
    CommonModule,
    BkbearningManagerRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    FormlyModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDialogModule,
    PaymentsModule,
    ImageViewerModule,
    FormsModule,
    DelayInputModule,
    MatPaginatorModule
  ]
})
export class BkbearningManagerModule { }
