import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {NgArrayPipesModule} from 'ngx-pipes';
import {DetailRoutingModule} from './detail-routing.module';
import {PrivateContestsModule} from '../../private-contests/private-contests.module';

import { BkbcontestsModule } from 'src/app/bkbcontests/bkbcontests.module';
@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    CommonModule,
    MatChipsModule,
    DetailRoutingModule,
    MatToolbarModule,
    FormsModule,
    NgArrayPipesModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    BkbcontestsModule,
    PrivateContestsModule,
  ]
})
export class DetailModule { }
