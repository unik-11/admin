import { Component, OnInit , Input} from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormService } from '../../_services/form.service';
import { ToastService } from '../../_component/toast/toast.service';
import { DataService } from '../../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment/moment';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LoadingService } from '../../loading.service';
@Component({
  selector: 'app-influencerdetail',
  templateUrl: './influencerdetail.component.html',
  styleUrls: ['./influencerdetail.component.scss']
})
export class InfluencerdetailComponent implements OnInit {
  loading$=this.loader.loading$;
 base='influencer';
  checked = true;
  id ;
  page = 0;
  search = '';
  perPage=0;
  def_inning = 0;
  filter: any = {};
  total=0
  data=[];
  @Input('influencerId') influencerId = '';

  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService,
    public loader: LoadingService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private router: Router) {
    this.activatedRoute.paramMap.subscribe(value => {
      if(value.get('influencerId')) {
        this.influencerId = value.get('influencerId');
        this.search = value.has('search') ? value.get('search') : '';
        this.init().then();
        this.dataService.setTitle('Leaderboard');
      }
    });
  }

  ngOnInit(): void {
  }

  async init() {
    let params = new HttpParams();
    // if (this.filter) {
    //   for (const f in this.filter) {
    //     if (this.filter.hasOwnProperty(f)) {
    //       if (['from_date', 'to_date'].indexOf(f) > -1) {
    //         const date = moment(this.filter[f]);
    //         if (date.isValid()) {
    //           params = params.set(f, date.format('YYYY-MM-DD'));
    //         }
    //       } else {
    //         params = params.set(f, this.filter[f]);
    //       }
    //     }
    //   }
    // }
    params = params.set('page', (this.page + 1).toString());
    params = params.set('per_page', this.perPage.toString());
    params = params.set('influencerId', this.influencerId);
    params = params.set('search', this.search.toString());
    params = params.set('def_inning', this.def_inning);
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
        this.page=0;
      }
    }

    const value = await this.api.get(this.base, { params }).toPromise();
    if (value.status) {
      const data = value.data;
      this.data = data.data;
      this.total = data.total;
      this.perPage = data.per_page;
      this.page = data.current_page - 1;
    }
  }

  async setParams() {
    const params = Object.assign(this.filter, { page: this.page, search: this.search, perPage: this.perPage });
    await this.router.navigate(['/leaderboard/'+this.influencerId+"/"], { queryParams: params });
    await this.init();

  }




// manoj------
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
      newValue.influencerId=this.influencerId;
      this.loader.show()
      this.filter = newValue;
      // console.log(this.filter);
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

      const value = await this.api.get('export-influencer-user', { params, responseType: 'blob' }).toPromise();
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



  // manoj--end--

  async openFilter() {
    const fields: FormlyFieldConfig[] = [
      {
        key: 'from_date',
        type: 'datepicker',
        templateOptions: {
          label: 'From',
          type: 'date'
        }
      },
      {
        key: 'to_date',
        type: 'datepicker',
        templateOptions: {
          label: 'To',
          type: 'date'
        }
      },
    ];
    const newValue = await this.formService.filter(fields, this.filter, {
      width: '', reset: {
        fixture_id: '',
        merchant_id: ''
      }
    });

    if (newValue) {
      if (JSON.stringify(newValue) !== JSON.stringify(this.filter)) {
        this.filter = newValue;
        console.log("fineeeeeeeeeeeeeeeeeeeeee");
        await this.init();
      }
    }
  }

  convertJson(data){
    var convert=JSON.parse(data);
    return convert;
  }

}
