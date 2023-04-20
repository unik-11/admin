import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminCreateRoutingModule } from './subadmin-create-routing.module';
import { SubadminCreateComponent } from './subadmin-create.component'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SubadminCreateComponent],
  imports: [
    CommonModule,
    SubadminCreateRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class SubadminCreateModule { }
