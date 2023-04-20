import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormService } from '../_services/form.service';
import { ToastService } from '../_component/toast/toast.service';
import { DataService } from '../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import * as moment from 'moment/moment';
import {Router} from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent {
  loading$=this.loader.loading$;
  base = 'influencer';
  data = [];
  search = '';
  total = 0;
  page = 0;
  perPage = 0;
  filter: any = {};
  admin=true;
  roleid :any;
  accesspage :any;
  slug:any;

  constructor(private api: ApiService,
    private formService: FormService,
    public loader: LoadingService,
    private router: Router,
    private toastService: ToastService,
    public dataService: DataService) {
      this.rolecheck().then();

    this.dataService.setTitle('SubAdmin Data');
  }
  async rolecheck() {
    const value = await this.api.get("userrole").toPromise();
    if (value.status) {
      const data = value.data;
      this.roleid = data.role_id;
      this.accesspage = data.accesspage;
      let keys = '';
      if(this.accesspage){
        keys = Object.keys(this.accesspage).filter((d)=>{
          return this.accesspage[d] == "1"
        })[0];
      }
      //location.reload()
      this.slug='influencer';
      if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage[this.slug] == 1)?true:false:true)){
        this.init().then();
      }else{
        alert("You can't access this panel");
      }
      // if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage.slug == 1)?true:false:true)){
      //   this.init().then();
      // }else if(keys){
      //   this.router.navigateByUrl(keys).then();
      // }else{
      //   this.router.navigateByUrl('dashboard').then();
      // }

    }
  }

  async init() {
        let params = new HttpParams();
        if (this.filter) {
          for (const f in this.filter) {
            if (this.filter.hasOwnProperty(f)) {
              if (['from_date', 'to_date'].indexOf(f) > -1) {
                const date = moment(this.filter[f]);
                if (date.isValid()) {
                  params = params.set(f, date.format('YYYY-MM-DD'));
                }
              } else {
                params = params.set(f, this.filter[f]);
              }
            }
          }
        }
      params = params.set('search', this.search.toString());
        params = params.set('page', (this.page + 1).toString());
        params = params.set('per_page', this.perPage.toString());
        const value = await this.api.get(this.base,{ params }).toPromise();
        if (value.status) {
          const getdata = value.data;
          this.data=getdata.data;
          if(value.data.role_id!=1){
            this.admin=false;
          }
          this.total = getdata.total;
          this.perPage = getdata.per_page;
          this.page = getdata.current_page - 1;
          console.log(this.data);
        }
  }

  async add() {
    const fields: FormlyFieldConfig[] =
      [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Name',
                required: true
              }
            },
            {
              key: 'email',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Email',
                required: true
              }
            },
            {
              key: 'password',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Password',
                required: true
              }
            },
            {
              key: 'phone',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Phone',
                required: true
              }
            },
            {
              key: 'influncer_commission',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Commission Percentage',
                required: true
              }
            },
            {
              key: 'influncer_referal_bonus',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Referal Bonus',
                type: 'number',
                required: true
              }
            },
          ]
        },
      ];


    const value: any = await this.formService.show(fields, this.base, 'POST', {}, {
      title: 'Add SubAdmin',
      width: '500px'
    });

    if (value) {
      await this.init();
    }
  }

  async edit(d) {
    const fields: FormlyFieldConfig[] =
      [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'name',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Name',
                required: true
              }
            },
            {
              key: 'email',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Email',
                required: true
              }
            },
            {
              key: 'password',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Password'
              }
            },
            {
              key: 'phone',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Phone',
                required: true
              }
            },
            {
              key: 'influncer_commission',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Commission Percentage',
                required: true
              }
            },
            {
              key: 'influncer_referal_bonus',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Referal Bonus',
                type: 'number',
                required: true
              }
            },
          ]
        },
      ];

    const value: any = await this.formService.show(fields, this.base + '/' + d.id, 'PUT', Object.assign({}, d), {
      title: 'Edit Contest Category',
      width: '350px'
    });

    if (value) {
      await this.init();
    }
  }

  async remove(d) {
    const value: any = await this.formService.confirm();

    if (value) {
      let params = new HttpParams();
      params = params.set('deleteid', d.id);
      const v: any = await this.api.get(this.base ,{ params }).toPromise();
      if (v.status) {
        await this.init();
      }
    }
  }

  async exportData() {
    const fields: FormlyFieldConfig[] = [
      {
        key: 'from_date',
        type: 'datepicker',
        templateOptions: {
          label: 'From',
          type: 'date',
          datepickerOptions: {
            max: moment().format('YYYY-MM-DD')
          },
          required: true,
        },
        expressionProperties: {
          'templateOptions.datepickerOptions.max': 'model.to_date'
        }
      },
      {
        key: 'to_date',
        type: 'datepicker',
        templateOptions: {
          label: 'To',
          type: 'date',
          datepickerOptions: {
            max: moment().format('YYYY-MM-DD')
          },
          required: true,
        },
        expressionProperties: {
          'templateOptions.datepickerOptions.min': 'model.from_date',
        }
      },
      {
        key: 'type',
        type: 'select',
        templateOptions: {
          label: 'Type',
          options: [
            { value: 'CSV', label: 'CSV' },
            { value: 'XLS', label: 'XLS' }
          ],
          required: true,
        }
      },
    ];


    const newValue = await this.formService.filter(fields, this.filter, {
      width: '300px', reset: {
        user_type: '',
        type: '',
      }
    });

    if (newValue) {
      this.loader.show()
      this.filter = newValue;
      let params = new HttpParams();
      for (const f in this.filter) {
        if (this.filter.hasOwnProperty(f)) {
          if (['from_date', 'to_date'].indexOf(f) > -1) {
            const date = moment(this.filter[f]);
            if (date.isValid()) {
              params = params.set(f, date.format('YYYY-MM-DD'));
            } else {
              await this.toastService.error('Invalid Filter Selection');
            }
          } else {
            params = params.set(f, this.filter[f]);
          }
        }
      }

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('responseType', 'arrayBuffer');

      const value = await this.api.get('export-influencer-detail', { params, responseType: 'blob' }).toPromise();
      //console.log(value);
      let type = 'application/vba.ms-excel';
      if (this.filter.type === 'CSV') {
        type = 'application/csv';
      }
      this.downLoadFile(value, type);
    }
  }

  downLoadFile(data: any, type: string) {
    const blob = new Blob([data], { type });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    if (type === 'application/vba.ms-excel') {
      a.download = 'influencer_detail_export.xlsx';
    } else {
      a.download = 'influencer_detail_export.csv';
    }
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
    this.loader.hide()

  }


}
