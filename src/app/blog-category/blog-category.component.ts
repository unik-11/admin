import { Component} from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormService } from '../_services/form.service';
import { DataService } from '../_services/data.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-blog-category',
  templateUrl: './blog-category.component.html',
  styleUrls: ['./blog-category.component.scss']
})
export class BlogCategoryComponent  {

  base = 'blog-categories';
  data = [];
  search = '';
  total = 0;
  page = 0;
  perPage = 0;
  roleid :any;
  accesspage :any;
  slug:any;
  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService) {
    this.rolecheck().then();
    this.dataService.setTitle('Blog Categories');
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
    this.slug='blog-category';
    if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage[this.slug] == 1)?true:false:true)){
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('search', this.search.toString());
      const value: any = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        this.data = value.data.contest_categories.data;
        this.total = value.data.contest_categories.total;
        this.perPage = value.data.contest_categories.per_page;
        this.page = value.data.contest_categories.current_page - 1;
      }
    }else{
      alert("You can't access this panel");
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
              key: 'is_active',
              type: 'toggle',
              className: 'col-12',
              templateOptions: {
                label: 'Is active?',
                //required: true,
                appearance: 'none',
                checked:true

              }
            },
          ]
        },
      ];


    const value: any = await this.formService.show(fields, this.base, 'POST', {}, {
      title: 'Create Contest Category',
      width: '350px'
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
            // {
            //   key: 'tagline',
            //   type: 'input',
            //   className: 'col-12',
            //   templateOptions: {
            //     label: 'Tagline',
            //     required: true
            //   }
            // },
            // {
            //   key: 'sequence_by',
            //   type: 'input',
            //   className: 'col-12',
            //   templateOptions: {
            //     label: 'Sequence',
            //     required: true,
            //     type: 'number',
            //     min: 1
            //   }
            // },
            {
              key: 'is_active',
              type: 'toggle',
              className: 'col-12',
              templateOptions: {
                label: 'Is active?',
                //required: true,
                appearance: 'none'
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
    const value = await this.formService.confirm();

    if (value) {
      const v: any = await this.api.delete(this.base + '/' + d.id).toPromise();
      if (v.status) {
        await this.init();
      }
    }
  }


}
