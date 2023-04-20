import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtfixturesComponent } from './ftfixtures.component';
import { FixturesRoutingModule } from './ftfixtures-routing.module';
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
import { ViewcronComponent } from './viewcron/viewcron.component';
import { AllViewcronComponent } from './all-viewcron/all-viewcron.component';

@NgModule({
  declarations: [FtfixturesComponent, ViewcronComponent, AllViewcronComponent],
  exports: [
    FtfixturesComponent
  ],
    imports: [
        CommonModule,
        FixturesRoutingModule,
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
    ]
})
export class FtfixturesModule {
}
