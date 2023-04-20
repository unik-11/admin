import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormService } from '../_services/form.service';
import { DataService } from '../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';

import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-subadmin-permission',
  templateUrl: './subadmin-permission.component.html',
  styleUrls: ['./subadmin-permission.component.scss']
})
export class SubadminPermissionComponent implements OnInit {

  base='subadmin-permissions';
  data = [];
  selected_cat = [];
  checked = true;
  getuserId='';
  masterSelected:boolean;
  childSelected:boolean;
  cat:string;
  page = 0;
  def_inning = 0;
  @Input('userId') userId = '';

  perPage = 0;
  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

      this.activatedRoute.paramMap.subscribe(value => {
        if(value.get('userId')) {
          this.getuserId = value.get('userId');

          this.init().then();
          this.dataService.setTitle('Fixtures');
        }
      });
      this.masterSelected = false;
      this.childSelected = false;
  }


  ngOnInit() {
    this.cat = null;
  }

  async init() {
    let params = new HttpParams();
    params = params.set('user_id', this.getuserId);
    const value = await this.api.get(this.base, { params }).toPromise();
    this.data = value.data.permissions_type;
    console.log(this.data)

  }

  async findcontest(getValue){
    this.def_inning = getValue;
    let params = new HttpParams();

    params = params.set('category_temp', "category");

    const value = await this.api.get(this.base, { params }).toPromise();
    this.selected_cat = value.data.selected_data
  }

  changeCt(ctName){
    this.cat=ctName;
    return true;
  }

  valueExists(id){
    return this.selected_cat.some(function(el) {
      return el.contest_template_id === id;
    });
  }

  contestDataSubmit (contestDataSubmit){
    console.log(contestDataSubmit);
    let _int = {}
    let _string = {}
    Object.keys(contestDataSubmit).map(key=>{
      let num = parseInt(key) + 1
      if(isNaN(num)){
        _string[key] = contestDataSubmit[key]
      }else{
        _int[key] = contestDataSubmit[key]
      }

    })
    let _data ={
      contData:_int,
      page:_string,
      user_id:this.getuserId

    }
    this.api.post(this.base, _data).subscribe((value) => {
      if (value.status) {
        this.router.navigate(['/subadmin-create']);
      }else{
        console.log("error");
      }
    });
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].isSelected = this.masterSelected;
    }
  }

  joinStr(a,b){
    return a+b;

  }


  childCheckUncheckAll(categorey) {
    for (var i = 0; i < this.data.length; i++) {
      if(categorey==this.data[i].ct_name) {
        this.data[i].isSelected = this.childSelected;
      }
    }
    this.childSelected=false;
  }

  async add() {
    const fields: FormlyFieldConfig[] =
      [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'page_name',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Page Name',
                required: true
              }
            },
            {
              key: 'slug',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Laravel slug',
                required: true
              }
            }
          ]
        },
      ];


    const value: any = await this.formService.show(fields, this.base, 'POST', {}, {
      title: 'Add More Pages',
      width: '500px'
    });

    if (value) {
      await this.init();
    }
  }

  async edit(data) {

    const fields: FormlyFieldConfig[] =
      [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'page_name',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'Page Name',
                required: true
              }
            },
            {
              key: 'slug',
              type: 'input',
              className: 'col-12',
              templateOptions: {
                label: 'laravel Slug',
                required: true
              }
            },
          ]
        },
      ];

    const value: any = await this.formService.show(fields, this.base + '/' + data.id, 'PUT', Object.assign({}, data), {
      title: 'Edit Pages',
      width: '350px'
    });

    if (value) {
      await this.init();
    }
  }

}
