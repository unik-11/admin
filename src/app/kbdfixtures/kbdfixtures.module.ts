import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KbdfixturesComponent } from './kbdfixtures.component';
import { KbdfixturesRoutingModule } from './kbdfixtures-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import {DelayInputModule} from '../_directive/delay-input.module';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {NgArrayPipesModule} from 'ngx-pipes';
import { AllViewcronComponent } from './all-viewcron/all-viewcron.component';
import { ViewcronComponent } from './viewcron/viewcron.component';
// import { AllViewcronComponent } from './all-viewcron.component';
// import { DetailComponent } from './detail/detail.component';
// import { ViewcronComponent } from './viewcron/viewcron.component';
// import { AllViewcronComponent } from './all-viewcron/all-viewcron.component';

@NgModule({
  declarations: [KbdfixturesComponent, AllViewcronComponent, ViewcronComponent],

  exports: [
    KbdfixturesComponent
   ],
  imports: [
    CommonModule,
    KbdfixturesRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    DelayInputModule,
    MatTabsModule,
    MatDialogModule,
    NgArrayPipesModule
  ],

})
export class KbdfixturesModule { }
