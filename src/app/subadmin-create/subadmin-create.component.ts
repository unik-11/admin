import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormService } from '../_services/form.service';
import { DataService } from '../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-subadmin-create',
  templateUrl: './subadmin-create.component.html',
  styleUrls: ['./subadmin-create.component.scss']
})
export class SubadminCreateComponent {
  base = 'subadmin-user';
  data = [];
  search = '';
  total = 0;
  page = 0;
  perPage = 0;
  admin=true;
  roleid :any;
  accesspage :any;
  slug:any;

  constructor(private api: ApiService,
    private formService: FormService,
    private router: Router,
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
      this.slug='subadmin-create';
      if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage.slug == 1)?true:false:true)){
        this.init().then();
      }else if(keys){
        this.router.navigateByUrl(keys).then();
      }else{
        this.router.navigateByUrl('dashboard').then();
      }

    }
  }

  async init() {
        let params = new HttpParams();
        params = params.set('page', (this.page + 1).toString());
        params = params.set('per_page', this.perPage.toString());
        const value = await this.api.get(this.base,{ params }).toPromise();
        if (value.status) {
          const getdata = value.data.userdata;
          this.data=getdata.data;
          if(value.data.role_id!=0 && value.data.role_id!=1){
            this.admin=false;
          }
          this.total = getdata.total;
          this.perPage = getdata.per_page;
          this.page = getdata.current_page - 1;
          //console.log(this.data);
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
              key: 'pin',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Pin',
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
}
