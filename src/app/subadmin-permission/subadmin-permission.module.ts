import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubadminPermissionRoutingModule } from './subadmin-permission-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SubadminPermissionComponent } from './subadmin-permission.component';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [SubadminPermissionComponent],
  imports: [
    CommonModule,
    SubadminPermissionRoutingModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule

  ]
})
export class SubadminPermissionModule { }
