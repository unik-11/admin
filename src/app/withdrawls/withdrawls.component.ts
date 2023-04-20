import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {FormService} from '../_services/form.service';
import {DataService} from '../_services/data.service';
import {HttpParams} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {FormlyFieldConfig} from '@ngx-formly/core';
import * as moment from 'moment/moment';
import {ToastService} from '../_component/toast/toast.service';
import {DomSanitizer} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../loading.service';

import 'rxjs';

@Component({
  selector: 'app-withdrawls',
  templateUrl: './withdrawls.component.html',
  styleUrls: ['./withdrawls.component.scss']
})
export class WithdrawlsComponent {
  base = 'payments';
  loading$=this.loader.loading$;
  data = [];
  filter: any = {};
  masterSelected:boolean;
  statuses = [];
  total = 0;
  page = 0;
  perPage = 0;
  search = '';
  status ='';
  roleid :any;
  accesspage :any;
  slug:any;
  @Input('userId') userId = '';
  @ViewChild('exportTemplate') exportTemplate: TemplateRef<HTMLElement>;
  fileUrl: any;

  constructor(private api: ApiService,public loader: LoadingService,
              private formService: FormService,
              public dataService: DataService,
              private matDialog: MatDialog,
              private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private toastService: ToastService) {

                this.activatedRoute.queryParamMap.subscribe(value => {
                  // this.filter = {
                  //   from_date: '',
                  //   to_date: '',
                  //   type: ''
                  // };

                  this.filter = {
                    status: 'PENDING'
                  };
                  this.masterSelected = false;

                  this.search = value.has('search') ? value.get('search') : '';
                  this.status = value.has('status') ? value.get('status') : '';


                  // tslint:disable-next-line:radix
                  this.page = value.has('page') ? parseInt(value.get('page')) : 0;
                  // tslint:disable-next-line:radix
                  this.perPage = value.has('perPage') ? parseInt(value.get('perPage')) : 0;

                  this.rolecheck().then();
                });

    this.dataService.setTitle('Payments');
  }

   // The master checkbox will check/ uncheck all items
   checkUncheckAll() {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].isSelected = this.masterSelected;
    }
  }

  async rolecheck() {
    const value = await this.api.get("userrole").toPromise();
    if (value.status) {
      const data = value.data;
      this.roleid = data.role_id;
      this.accesspage = data.accesspage;
      this.init().then();

    }
  }

  // ngOnInit() {
  //   this.init().then();
  // }

  async init() {
    this.slug='withdrawals';
    if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage['payments'] == 1)?true:false:true)){
      let params = new HttpParams();
      params = params.set('status', this.status.toString());

      if (this.filter) {
        for (const f in this.filter) {
          if (this.filter.hasOwnProperty(f)) {
            params = params.set(f, this.filter[f]);
          }
        }
      }
      params = params.set('type', 'WITHDRAW');
      params = params.set('mode', 'WITHDRAW');
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('search', this.search.toString());
      params = params.set('user_id', this.userId.toString());
      const value: any = await this.api.get(this.base, {params}).toPromise();
      if (value.status) {
        const data = value.data;
        this.data = data.payments;
        this.statuses = value.data.statuses;

        this.total = data.total;
        this.perPage = data.per_page;
        this.page = data.current_page - 1;
      }
    }else{
      alert("You can't access this panel");
    }
  }

  async openFilter() {
    const fields: FormlyFieldConfig[] = [
      // {
      //   key: 'type',
      //   type: 'select-search',
      //   templateOptions: {
      //     label: 'Type',
      //     options: [
      //       { id: 'DEPOSIT', name: 'DEPOSIT' },
      //       { id: 'WITHDRAW', name: 'WITHDRAW' },
      //       { id: 'CONTEST JOIN', name: 'CONTEST JOIN' },
      //       { id: 'CONTEST WON', name: 'CONTEST WON' },
      //       { id: 'REFUND', name: 'REFUND' },
      //     ]
      //   }
      // },
      {
        key: 'status',
        type: 'select-search',
        templateOptions: {
          label: 'Status',
          options: [
            {id: 'SUCCESS', name: 'SUCCESS'},
            {id: 'PENDING', name: 'PENDING'},
            {id: 'REJECTED', name: 'REJECTED'},
            {id: 'ENQUEUED', name: 'ENQUEUED'}
          ]
        }
      }
    ];
    const newValue = await this.formService.filter(fields, this.filter, {
      width: '300px', reset: {
        fixture_id: '',
        merchant_id: ''
      }
    });
    if (newValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(this.filter)) {
        this.filter = newValue;
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
        key: 'typecontest',
        type: 'select-search',
        templateOptions: {
          label: 'Type',
          options: this.statuses
        }
      },
      {
        key: 'status',
        type: 'select-search',
        templateOptions: {
          label: 'Status',
          options: [
            { id: 'SUCCESS', name: 'SUCCESS' },
            { id: 'PENDING', name: 'PENDING' }
          ]
        }
      },
      {
        key: 'type',
        type: 'select',
        templateOptions: {
          label: 'Type',
          options: [
            {value: 'CSV', label: 'CSV'},
            {value: 'XLS', label: 'XLS'}
          ],
          required: true,
        }
      },
    ];

    const newValue = await this.formService.filter(fields, this.filter, {
      width: '300px', reset: {
        from_date: '',
        to_date: '',
        type: '',
      }
    });

    if (newValue) {

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

      const value = await this.api.get('export-withdraw', {params, responseType: 'blob'}).toPromise();

      let type = 'application/vba.ms-excel';
      if (this.filter.type === 'CSV') {
        type = 'application/csv';
      }
      this.downLoadFile(value, type);
    }
  }

  downLoadFile(data: any, type: string) {
    const blob = new Blob([data], {type});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('style', 'display: none');
    a.href = url;
    if (type === 'application/vba.ms-excel') {
      a.download = 'payment.xlsx';
    } else {
      a.download = 'payment.csv';
    }
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

  async changeStatus(d,msg){
    let text="Are you sure you want to send withdraw payment?";
    if(msg=='cancel'){
      text="Are you sure you want to cancel withdraw payment?"
    }
    if(msg=='already_pay'){
      text="Are you sure you have already sent the withdrawal payment?"
    }
    const cvalue: any = await this.formService.confirm("Confirmation",text);
    if (cvalue) {
      this.loader.show()
      d.status=msg;
      const value: any =await this.api.put(this.base + '/' + d.id, d).toPromise();
      if (value.status) {
        this.loader.hide()
        await this.init();
      }else{
        this.loader.hide()
        await this.init();
      }
    }
  }

  contestDataSubmit (contestDataSubmit){

    let _int = {}
    let _string = {}

    //var checkJson=JSON.stringify(contestDataSubmit);


      Object.keys(contestDataSubmit).map(key=>{
        let num = parseInt(key) + 1
        if(!isNaN(num)){
          //_string[key] = contestDataSubmit[key]
          if(contestDataSubmit[key]){
            _int[key] = contestDataSubmit[key]
          }
        }

      })

    console.log(Object.keys(_int).length != 0);

    if(Object.keys(_int).length != 0){
      let _data ={
        paymentData:_int,
      }

      this.loader.show()

      this.api.post(this.base, _data).subscribe((value) => {
        if (value.status) {
          this.loader.hide()
          this.init();
        }else{
          this.loader.hide()
          this.init();
        }


      });
    }


  }

  async update(d) {
    const cvalue: any = await this.formService.confirm("Confirmation","Are you sure you want to enable the send button?");
    if(cvalue){
      d.is_lock_flag="is_lock_flag";
      await this.api.put(this.base + '/' + d.id, d).toPromise();
      await this.init();
    }else{
      await this.init();

    }

  }

}
