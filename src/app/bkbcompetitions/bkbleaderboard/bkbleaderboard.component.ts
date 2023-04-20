import { Component,Input, OnInit } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormService } from '../../_services/form.service';
import { ToastService } from '../../_component/toast/toast.service';
import { DataService } from '../../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment/moment';
import { FormlyFieldConfig } from '@ngx-formly/core';


@Component({
  selector: 'app-bkbleaderboard',
  templateUrl: './bkbleaderboard.component.html',
  styleUrls: ['./bkbleaderboard.component.scss']
})
export class BkbleaderboardComponent implements OnInit {

  base='leaderboard';
  checked = true;
  page = 0;
  search = '';
  perPage=0;
  def_inning = 0;
  filter: any = {};
  total=0
  data=[];
  @Input('competitionId') competitionId = '';

  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService,
    private router: Router) {
    this.activatedRoute.paramMap.subscribe(value => {
      if(value.get('competitionId')) {
        this.competitionId = value.get('competitionId');
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
    params = params.set('page', (this.page + 1).toString());
    params = params.set('per_page', this.perPage.toString());
    params = params.set('competitionId', this.competitionId);
    params = params.set('search', this.search.toString());
    params = params.set('def_inning', this.def_inning);

    const value = await this.api.get(this.base, { params }).toPromise();
    if (value.status) {
      const data = value.data;
      this.data = data.users;
      this.total = data.total;
      this.perPage = data.per_page;
      this.page = data.current_page - 1;
    }
  }

  async setParams() {
    const params = Object.assign(this.filter, { page: this.page, search: this.search, perPage: this.perPage });
    await this.router.navigate(['/leaderboard/'+this.competitionId+"/"], { queryParams: params });
    await this.init();

  }

  async exportData() {
    const fields: FormlyFieldConfig[] = [
      {
        key: 'competition_id',
        defaultValue: this.competitionId,
      },
      {
        key: 'user_type',
        type: 'select-search',
        templateOptions: {
          label: 'Type',
          options: [
            {'id':'all_user','name':"All User"},
            {'id':'normal_user','name':"Normal User"}
          ],
          required: true,
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

      this.filter = newValue;
      let params = new HttpParams();
      for (const f in this.filter) {
        if (this.filter.hasOwnProperty(f)) {
            params = params.set(f, this.filter[f]);
        }
        //params = params.set('user_id', this.userId.toString());
      }

      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('responseType', 'arrayBuffer');

      const value = await this.api.get('export-leaderboard-data', { params, responseType: 'blob' }).toPromise();
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
      a.download = 'leaderboad_export.xlsx';
    } else {
      a.download = 'leaderboad_export.csv';
    }
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }

}
