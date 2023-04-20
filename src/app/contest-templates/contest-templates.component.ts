import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormService } from '../_services/form.service';
import { DataService } from '../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contest-templates',
  templateUrl: './contest-templates.component.html',
  styleUrls: ['./contest-templates.component.scss']
})
export class ContestTemplatesComponent {
  base = 'contest-templates';
  data = [];
  search = '';
  total = 0;
  newGlobalPercentage=0;
  sports_type =[];
  defaulttype='CRICKET';
  globalPercentage=0;
  page = 0;
  rfrom = 0;
  groundtotal = 0;
  totalPrize:any;
  tempModel:any;
  rto = 0;
  perPage = 0;
  fields: FormlyFieldConfig[] = [];
  @ViewChild('prizeBreakupTemplate') prizeBreakupTemplate: TemplateRef<HTMLElement>;
  prizeBreakups = [];
  categories: any;
  newcategories: any;
  rankCategories: any;
  roleid :any;
  accesspage :any;
  slug:any;
  formPrize = 0;

  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService,
    public matDialog: MatDialog) {
    this.dataService.setTitle('Contest Templates');
    Promise.all([this.getCategories(), this.getRankCategories()]).then(() => {
      this.rolecheck().then();
    });

  }

  async rolecheck() {
    const value = await this.api.get("userrole").toPromise();
    if (value.status) {
      const data = value.data;
      this.roleid = data.role_id;
      this.accesspage = data.accesspage;
      // this.newcategories=this.categories[this.defaulttype];
      this.init().then();

    }
  }

  async init() {
    this.slug='contest-templates';
    if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage[this.slug] == 1)?true:false:true)){
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('search', this.search.toString());
      params = params.set('sports_type', this.defaulttype.toString());
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        this.data = value.data.contest_templates.data;
        this.total = value.data.contest_templates.total;
        this.sports_type = value.data.sports_type;
        this.perPage = value.data.contest_templates.per_page;
        this.page = value.data.contest_templates.current_page - 1;
      }
      this.fieldsform();
    }else{
      alert("You can't access this panel");
    }
  }

  fieldsform(){
    this.fields = [
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'name',
            type: 'input',
            className: 'col-12 col-md-5',
            templateOptions: {
              label: 'Name',
              required: true
            }
          },
          {
            key: 'description',
            type: 'textarea',
            className: 'col-12 col-md-7',
            templateOptions: {
              label: 'Description',
            }
          },
        ]
      },
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            key: 'type',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-2',
            templateOptions: {
              label: 'Contest Type',
              options: [
                { id: 'PAID', name: 'PAID' },
                { id: 'DISCOUNT', name: 'DISCOUNT' },
                { id: 'FREE', name: 'FREE' },
                { id: 'MINI', name: 'MINI' },
                { id: 'PRACTICE', name: 'PRACTICE' },
                { id: 'MULTI_JOIN', name: 'MULTI_JOIN' },
                // { id: 'BONUS', name: 'BONUS' },
              ],
              required: true
            }
          },
          {
            hideExpression: (model, formState) => {
              this.tempModel=model;
              return model.type === 'PRACTICE'
            },
            key: 'commission',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Commission',
              required: true,
              type: 'number',
              min: 0
            }
          },

          {
            key: 'total_teams',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Total Teams',
              required: true,
              type: 'number',
              min: 2
            }
          },
          {
            hideExpression: (model, formState) => model.type === 'PRACTICE',
            key: 'prize',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Total Prize',
              required: true,
              type: 'number'
            },
            expressionProperties: {
              'model.prize': (model: any) => {
                this.formPrize = model.prize;
                return model.prize;
              }
            }
          },
          // {
          //   hideExpression: (model) => model.type !== 'BONUS',
          //   key: 'entry_fee',
          //   type: 'input',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Entry fee',
          //     required: true,
          //     type: 'number'
          //   },

          // },
          {
            hideExpression: (model) => {
              //return  model.type === 'PRACTICE' ? model.type === 'PRACTICE' :  model.type === 'BONUS';
              return  model.type === 'PRACTICE';
            },
            key: 'entry_fee',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Entry fee',
              required: true,
              //readonly: true,
              type: 'number',
              min: 0
            },
            expressionProperties: {
              'model.entry_fee': (model: any) => {
                // tslint:disable-next-line:radix max-line-length
                //if(model.type != 'BONUS'){
                  if(model.type != 'FREE'){
                    // return Math.ceil((parseInt(model.prize) / parseInt(model.total_teams)) + (parseInt(model.commission) * parseInt(model.prize) / 100) / model.total_teams);
                    return Math.ceil((parseInt(model.prize) / parseInt(model.total_teams)) + (model.commission * parseInt(model.prize) / 100) / model.total_teams);
                  }else{
                    return 0;
                  }
                // }else{
                //   return model.entry_fee;
                // }
              },
              'templateOptions.description': (model: any) => {
                //if(model.type != 'BONUS'){
                  return 'Profit will ' + ((model.total_teams * model.entry_fee) - model.prize);
                //}
              },
            }
          },
          {
            key: 'is_confirmed',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Is Confirmed?',
              required: true,
              options: [
                { id: true, name: 'Yes' },
                { id: false, name: 'No' },
              ]
            }
          },
          {
            key: 'max_team',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Max teams per user',
              required: true,
              type: 'number',
              min: 1
            }
          },
          {
            key: 'auto_add',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Auto Add',
              required: true,
              options: [
                { id: true, name: 'Yes' },
                { id: false, name: 'No' },
              ]
            }
          },
          {
            key: 'auto_create_on_full',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Auto Create When Contest Full',
              required: true,
              options: [
                { id: true, name: 'Yes' },
                { id: false, name: 'No' },
              ]
            }
          },
          {
            key: 'sports_type',
            type: 'select',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Sporty Type',
              readonly: true,
              options: [
                { value: 'CRICKET', label: 'CRICKET' },
                // { value: 'FOOTBALL', label: 'FOOTBALL' },
                // { value: 'KABADDI', label: 'KABADDI' },
                // { value: 'BASKETBALL', label: 'BASKETBALL' },
                // { value: 'BASEBALL', label: 'BASEBALL' },
                // { value: 'HOCKEY', label: 'HOCKEY' },
              ]

            }
          },
          // {
          //     key: '',
          //     type: 'select-search',
          //     className: 'col-12  col-md-3 col-lg-3',
          //     templateOptions: {
          //       label: 'Sports Type',
          //       required: true,
          //       //onChange: console.log("yyyyyyyyyyyyy"), // ADDED
          //       options: this.sports_type
          //     },
          // },
          {
            hideExpression: (model, formState) => model.sports_type !== 'FOOTBALL',
            key: 'contest_category_id',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Contest Category',
              required: true,
              options: this.categories['FOOTBALL'],

            },
          },
          {
            hideExpression: (model, formState) => model.sports_type !== 'CRICKET',
            key: 'contest_category_id',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Contest Category',
              required: true,
              options: this.categories['CRICKET'],

            },
          },
          // {
          //   hideExpression: (model, formState) => model.sports_type !== 'KABADDI',
          //   key: 'contest_category_id',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Contest Category',
          //     required: true,
          //     options: this.categories['KABADDI'],

          //   },
          // },
          // {
          //   hideExpression: (model, formState) => model.sports_type !== 'BASKETBALL',
          //   key: 'contest_category_id',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Contest Category',
          //     required: true,
          //     options: this.categories['BASKETBALL'],

          //   },
          // },
          // {
          //   hideExpression: (model, formState) => model.sports_type !== 'BASEBALL',
          //   key: 'contest_category_id',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Contest Category',
          //     required: true,
          //     options: this.categories['BASEBALL'],

          //   },
          // },
          // {
          //   hideExpression: (model, formState) => model.sports_type !== 'HOCKEY',
          //   key: 'contest_category_id',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Contest Category',
          //     required: true,
          //     options: this.categories['HOCKEY'],

          //   },
          // },
          // {
          //   key: 'contest_category_id',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Contest Category',
          //     required: true,
          //     options: this.newcategories,
          //   },
          // },
          {
            hideExpression: (model, formState) => model.type !== 'DISCOUNT',
            key: 'discount',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            defaultValue: 0,
            templateOptions: {
              label: 'Discount',
              required: true,
              type: 'number',
              min: 0
            },

          },
          {
            key: 'bonus',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Bonus',
              required: true,
              type: 'number',
              min: 0
            }
          },
          {
            key: 'is_mega_contest',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-2',
            templateOptions: {
              label: 'Is Mega Contest',
              options: [
                { id: true, name: 'Yes' },
                { id: false, name: 'No' },
              ],
              required: true
            }
          },

          {
            key: 'inning',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-2',
            templateOptions: {
              label: 'Inning',
              options: [
                { id: 0, name: 'Full Match' },
                { id: 2, name: 'Second Inning' },
                { id: 3, name: 'Third Inning' },
                { id: 4, name: 'Fourth Inning' },
              ],
              required: true
            }
          },
          {
            key: 'is_dynamic',
            //type: 'input',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            defaultValue: 0,
            templateOptions: {
              label: 'Dynamic Contest',
              required: true,
              options: [
                {id:0,name:'Normal'},
                {id:1,name:'Dynamic'},
              ]
            },
            expressionProperties: {
              'model.is_dynamic': (model: any) => {
                return model.is_dynamic;
              }
            },
            //hideExpression: '!model.is_dynamic',
          },
          // GROUND TOTAL CODE
          {
            key: 'ground_total',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Ground Total',
              readonly: true,
            },
            expressionProperties: {
              'model.ground_total': (model: any) => {
                this.groundtotal=0
                this.totalPrize = 60
                this.tempModel.prize_breakup.forEach(element => {
                  this.groundtotal+=parseInt(element.showtotalprize)
                });
                return this.groundtotal;
              },
            }

          },
          {
            key: 'dynamic_min_team',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            defaultValue: 0,
            templateOptions: {
              label: 'Dynamic miniume team',
              type: 'number',
              min: 0
            },
            hideExpression: '!model.is_dynamic',
          },
          // {
          //   key: 'pdf.show',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Show',

          //     options: [
          //       { id: true, name: 'Yes' },
          //       { id: false, name: 'No' },
          //     ]
          //   },
          // },
          // {
          //   key: 'pdf.download',
          //   type: 'select-search',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Download',
          //     options: [
          //       { id: true, name: 'Yes' },
          //       { id: false, name: 'No' },
          //     ]
          //   },
          //   // expressionProperties: {
          //   //   'model.pdf.download': (model: any) => {
          //   //     console.log("tttttttttttttt");
          //   //     console.log(model);
          //   //     //return model.from;
          //   //   }
          //   // }
          // },
          // {
          //   //hideExpression: 'model.pdf.download',
          //   //hideExpression: (model, formState) => model.pdf.download ==true,

          //   key: 'pdf.message',
          //   type: 'input',
          //   className: 'col-12 col-md-3 col-lg-3',
          //   templateOptions: {
          //     label: 'Message',

          //     // type: 'decimal',
          //     // min: 0
          //   },
          // }
        ]
      },
      {
        hideExpression: (model, formState) => model.type === 'PRACTICE',

        fieldGroupClassName: 'row',
        fieldGroup: [{
          key: 'prize_breakup',
          type: 'repeat',
          className: 'col-12',
          templateOptions: {
            addText: 'Add Rank'
          },
          fieldArray: {
            fieldGroupClassName: 'row',
            fieldGroup: [
              {
                key: 'from',
                type: 'input',
                className: 'col-12 col-md-1',
                templateOptions: {
                  label: 'From',
                  required: true,
                  type: 'number',
                  min: 1
                },
                expressionProperties: {
                  'model.from': (model: any) => {
                    this.rfrom = model.from;
                    return model.from;
                  }
                }
              },
              {
                key: 'to',
                type: 'input',
                className: 'col-12 col-md-1',
                templateOptions: {
                  label: 'To',
                  required: true,
                  type: 'number',
                  min: 1
                },
                expressionProperties: {
                  'model.to': (model: any) => {
                    this.rto = model.to;
                    return model.to;
                  }
                }
              },
              {
                key: 'percentage',
                type: 'input',
                className: 'col-12 col-md-2',
                templateOptions: {
                  label: 'Percentage',
                  required: true,
                  type: 'number',
                },
                expressionProperties: {
                  'model.showtotalpercentage': (model: any) => {
                    this.rto =parseInt(model.to)+1;
                    return ((this.rto - this.rfrom) * model.percentage);
                  },
                  'model.globaltotalpercentage': (model: any) => {

                    if (isNaN(this.globalPercentage)){
                      this.globalPercentage=0;
                    }

                    if (!model.globaltotalpercentage){
                      this.newGlobalPercentage = this.globalPercentage+(this.rto - this.rfrom) * model.percentage;
                      return this.newGlobalPercentage;
                    }
                  },
                  'model.prize': (model: any) => {
                    return ((this.formPrize * model.percentage) / 100);
                  }
                }
              },
              {
                key: 'showtotalpercentage',
                type: 'input',
                className: 'col-12 col-md-2',
                templateOptions: {
                  label: 'Total Percentage',
                  readonly: true,
                }
              },
              {
                key: 'globaltotalpercentage',
                type: 'input',
                className: 'col-12 col-md-2',
                templateOptions: {
                  label: 'Global Percentage',
                  readonly: true,
                },
                expressionProperties: {
                  'model.globaltotalpercentage': (model: any) => {
                    this.globalPercentage=model.globaltotalpercentage;
                    return model.globaltotalpercentage;
                  }
                }
              },
              {
                key: 'prize',
                type: 'input',
                className: 'col-12 col-md-2',
                templateOptions: {
                  label: 'Prize',
                  readonly: true,
                  type: 'number',
                },
                expressionProperties: {
                  'model.showtotalprize': (model: any) => {
                    this.rto =parseInt(model.to)+1;
                    return ((this.rto - this.rfrom) * model.prize);
                  },
                }
              },
              {
                key: 'showtotalprize',
                type: 'input',
                className: 'col-12 col-md-2',
                templateOptions: {
                  label: 'Total Prize',
                  readonly: true,
                  type: 'number',
                }
              },
            ]
          }
        }]
      },
    ];
  }

  myChange(){
    console.log("fineee");
  }

  async getRankCategories() {
    // let params = new HttpParams();
    // params = params.set('type', 'list');
    // const value = await this.api.get('rank-categories', { params }).toPromise();
    // if (value.status) {
    //   this.rankCategories = value.data.rank_categories;
    // }
  }

  async getCategories() {
    const value = await this.api.get('contests/contest-categories').toPromise();
    if (value.status) {
      this.categories = value.data.contest_categories;
    }
  }

  async add(model = {
    max_team: 1,
    is_confirmed: false,
    commission: 0,
    bonus: 0,
    prize_breakup: [{
      from: 1,
      to: 1,
      prize: 1,
      prize_percentage: 1
    }]
  }) {

    const value: any = await this.formService.show(this.fields, this.base, 'POST', model, {
      title: 'Add Contest Template',
      minWidth: '50vw',
      maxWidth: '90vw'
    });

    if (value) {
      await this.init();
    }
  }

  async edit(d) {
    //console.log(d);
    const value: any = await this.formService.show(this.fields, this.base + '/' + d.id, 'PUT', Object.assign({}, d), {
      title: 'Edit Contest Template',
      minWidth: '50vw',
      maxWidth: '90vw'
    });

    if (value) {
      await this.init();
    }
  }

  async remove(d) {

    const value: any = await this.formService.confirm();

    if (value) {
      const v: any = await this.api.delete(this.base + '/' + d.id).toPromise();
      if (v.status) {
        await this.init();
      }
    }
  }

  async showPrizeBreakup(d) {
    this.prizeBreakups = d.prize_breakup;
    await this.matDialog.open(this.prizeBreakupTemplate, { panelClass: 'selection-dialog', minWidth: '320px' });
  }

  async onOptionsSelected(value:string){

    this.defaulttype=value;
    this.newcategories=this.categories[value];

    let params = new HttpParams();
    params = params.set('page', (this.page + 1).toString());
    params = params.set('per_page', this.perPage.toString());
    params = params.set('search', this.search.toString());
    params = params.set('sports_type', this.defaulttype.toString());
    const values = await this.api.get(this.base, { params }).toPromise();
    if (values.status) {
      this.data = values.data.contest_templates.data;
      this.total = values.data.contest_templates.total;
      // this.sports_type = values.data.sports_type;
      this.perPage = values.data.contest_templates.per_page;
      this.page = values.data.contest_templates.current_page - 1;
    }
    //this.init();
    this.fieldsform();
  }
}

