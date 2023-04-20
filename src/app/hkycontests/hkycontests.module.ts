import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HkycontestsRoutingModule } from './hkycontests-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';


import { HkycontestsComponent } from './hkycontests.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [HkycontestsComponent ],
  exports: [
   HkycontestsComponent
   ],
  imports: [
    CommonModule,
    HkycontestsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatChipsModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class HkycontestsModule { }
