import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {ApiService} from '../_services/api.service';
import {Router} from '@angular/router';
import {AuthService} from '../_services/auth.service';
import {DataService} from '../_services/data.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'otp',
      type: 'input',
      templateOptions: {
        label: 'Entery Otp',
        required: true,
        type: 'text'
      }
    }
  ];
  model: any = {};
  options: FormlyFormOptions = {};

  constructor(private api: ApiService,
              private router: Router,
              private authService: AuthService,
              public dataService: DataService) {
    this.dataService.setTitle('Login');
    // if (this.authService.user.value.hasOwnProperty('id')) {
    //   this.router.navigateByUrl('dashboard').then();
    // }
  }

  // login() {
  //   this.authService.login(this.form.value).subscribe((res) => {
  //     if (res.status) {
  //       this.router.navigateByUrl('dashboard').then();
  //     }
  //   });
  // }

}
