import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpRoutingModule } from './otp-routing.module';
import { OtpComponent } from './otp.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [OtpComponent],
  imports: [
    CommonModule,
    OtpRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class OtpModule { }
