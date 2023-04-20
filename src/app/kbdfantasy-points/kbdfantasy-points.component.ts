


  import {Component} from '@angular/core';
  import {ApiService} from '../_services/api.service';
  import {FormService} from '../_services/form.service';
  import {DataService} from '../_services/data.service';
  import {FormlyFieldConfig} from '@ngx-formly/core';

  @Component({
    selector: 'app-fantasy-points',
     templateUrl: './kbdfantasy-points.component.html',
  styleUrls: ['./kbdfantasy-points.component.scss']

  })
  export class KbdfantasyPointsComponent {

    base = 'kbdfantasy-points';
    data = [];
    types = [];
    tab;
    roleid :any;
    accesspage :any;
    slug:any;

    constructor(private api: ApiService,
                private formService: FormService,
                public dataService: DataService) {
      this.rolecheck().then();
      this.dataService.setTitle('Fantasy Points');
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

    async init() {
      this.slug='kbdfantasy-points';
      if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage[this.slug] == 1)?true:false:true)){
        const value: any = await this.api.get(this.base).toPromise();
        if (value.status) {
          this.data = value.data.fantasy_points;
          this.types = value.data.types;
          this.tab = this.types[0];
        }
      }else{
        alert("You can't access this panel");
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
                key: 'note',
                type: 'input',
                className: 'col-12',
                templateOptions: {
                  label: 'Note',
                }
              },
            ]
          },
        ];

      const value: any = await this.formService.show(fields, this.base + '/' + d.id, 'PUT', Object.assign({}, d), {
        title: 'Edit Fantasy Point',
        width: '350px'
      });

      if (value) {
        await this.init();
      }
    }

    async remove(d) {
      const value = await this.formService.confirm();

      if (value) {
        const v: any = await this.api.delete(this.base + '/' + d.id).toPromise();
        if (v.status) {
          await this.init();
        }
      }
    }


  }
