



  import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
  import { FormlyFieldConfig } from '@ngx-formly/core';
  import { ApiService } from '../_services/api.service';
  import { FormService } from '../_services/form.service';
  import { DataService } from '../_services/data.service';
  import { HttpParams } from '@angular/common/http';
  import { MatDialog } from '@angular/material/dialog';
  import * as moment from 'moment/moment';
  import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../loading.service';
  import { P } from '@angular/cdk/keycodes';

  @Component({
    selector: 'app-kbdcontests',
      templateUrl: './kbdcontests.component.html',
      styleUrls: ['./kbdcontests.component.scss']

  })
  export class KbdcontestsComponent implements OnInit {

    base = 'kbdcontests';
    data = [];
    fields: FormlyFieldConfig[];
    loading$=this.loader.loading$;
    globalPercentage=0;
    newGlobalPercentage=0;
    search = '';
    popupData:any;
    rfrom = 0;
    rto = 0;
    mode = '';
    total = 0;
    page = 0;
    perPage = 0;
    groundtotal = 0;
    totalPrize:any;
    tempModel:any;
    categories = [];
    fixtures = [];
    contestTemplates = [];
    prizeBreakups = [];
    statuses = [];
    statusesList = [];
    formPrize = 0;
    roleid :any;
    accesspage :any;
    slug:any;
    filter: any = {
      fixture_id: '',
      status: '',
      inning_number:'',
      type:''
    };
    inning_number = [
      { id: 0, name: 'Full Match' },
      { id: 2, name: 'Second Inning' },
      { id: 3, name: 'Third Inning' },
      { id: 4, name: 'Fourth Inning' }
    ];
    inn_met = 'check';
    @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

    @Input() fixtureId = '';
    @Input() userId = '';
    @ViewChild('poolsTemplate') poolsTemplate: TemplateRef<HTMLElement>;
    @ViewChild('prizeBreakupTemplate') prizeBreakupTemplate: TemplateRef<HTMLElement>;

    constructor(private api: ApiService,public loader: LoadingService,
      private formService: FormService,
      public dataService: DataService,
      public dialog: MatDialog,
      private matDialog: MatDialog,
      private activatedRoute: ActivatedRoute,
      private router: Router) {
      this.dataService.setTitle('Contests');
    }

    ngOnInit() {
      if (this.fixtureId) {
        this.filter.fixture_id = this.fixtureId;
      } else if (this.fixtureId && this.userId) {
        this.filter.fixture_id = this.fixtureId;
        this.userId = this.userId;

      } else {
        this.activatedRoute.queryParamMap.subscribe(value => {
          this.filter = {
            status: value.get('status') ?? '',
            // tslint:disable-next-line:radix
            fixture_id: parseInt(value.get('fixture_id')) || '',
            inning_number:value.get('inning_number') ?? '',
            type:value.get('type') ?? '',
          };

          this.search = value.has('search') ? value.get('search') : '';
          this.mode = value.has('mode') ? value.get('mode') : '';

          // tslint:disable-next-line:radix
          this.page = value.has('page') ? parseInt(value.get('page')) : 0;
          // tslint:disable-next-line:radix
          this.perPage = value.has('perPage') ? parseInt(value.get('perPage')) : 0;
        });
      }
      this.rolecheck().then();
    }

    async rolecheck() {
      const value = await this.api.get("userrole").toPromise();
      if (value.status) {
        const data = value.data;
        this.roleid = data.role_id;
        this.accesspage = data.accesspage;
        this.slug='kbdcontests';
        if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage[this.slug] == 1)?true:false:true)){
          Promise.all([this.init(), this.getCategories(), this.getFixtures(), this.getTemplates()]).then(() => {
            this.initFields();
          });
        }else{
          alert("You can't access this panel");
        }

      }
    }

    async init() {
      let params = new HttpParams();
      for (const f in this.filter) {
        if (this.filter.hasOwnProperty(f)) {
          params = params.set(f, this.filter[f]);
        }
      }

      if (this.fixtureId) {
        params = params.set('fixture_id', this.fixtureId);
      }

      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('search', this.search.toString());
      params = params.set('mode', this.mode.toString());
      params = params.set('user_id', this.userId);
      // params = params.set('fixture_id', this.fixtureId.toString());
      const value: any = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        this.statuses = value.data.statuses;
        this.statusesList = value.data.statuseslist;
        if(value.data.role_id!=1){
          this.statuses = this.statuses.filter((f)=>f.id !== "LIVE");
          console.log(JSON.stringify(this.statuses));
          //this.statusesList = value.data.statuseslist;
        }
        this.data = value.data.contests.data;
        console.log(JSON.stringify(this.data+"ttttttttttttttttt"));
        this.total = value.data.contests.total;
        this.perPage = value.data.contests.per_page;
        this.page = value.data.contests.current_page - 1;
      }
    }

    async openFilter() {
      const fields: FormlyFieldConfig[] = [
        {
          defaultValue: this.fixtureId,
          key: 'fixture_id',
          hideExpression: !this.fixtureId
        },
        {
          key: 'fixture_id',
          type: 'select-search',
          templateOptions: {
            label: 'Fixture',
            options: this.fixtures
          },
          hideExpression: this.fixtureId
        },
        {
          key: 'inning_number',
          type: 'select-search',
          templateOptions: {
            label: 'Inning',
            options: [
              { id: '0', name: 'First' },
              { id: '2', name: 'Second' },
              { id: '3', name: 'Third' },
              { id: '4', name: 'Fourth' },
            ],
          }
        },
        {
          key: 'type',
          type: 'select-search',
          templateOptions: {
            label: 'Contest Type',
            options: [
              { id: 'PAID', name: 'PAID' },
              { id: 'FREE', name: 'FREE' },
              { id: 'PRACTICE', name: 'PRACTICE' },
              // { id: 'BONUS', name: 'BONUS' },
            ],
          }
        },
        {
          key: 'status',
          type: 'select-search',
          templateOptions: {
            label: 'Status',
            options: this.statusesList
          }
        }
      ];

      const newValue = await this.formService.filter(fields, this.filter, {
        width: '300px', reset: {
          fixture_id: this.fixtureId,
          status: '',
          inning_number: '',
          type:''
        }
      });

      if (newValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(this.filter)) {
          this.filter = newValue;
          if (!this.fixtureId) {
            await this.setParams();
          } else {
            await this.init();
          }

        }
      }
    }

    async getCategories() {
      const value = await this.api.get(this.base + '/contest-categories').toPromise();
      //const value = await this.api.get('contests/categories').toPromise();
      if (value.status) {
        this.categories = value.data.contest_categories;
        //this.categories=this.categories['FOOTBALL'];


      }
    }

    async getFixtures() {
      if (!this.fixtureId) {
        const value = await this.api.get(this.base + '/fixtures').toPromise();
        if (value.status) {
          this.fixtures = value.data.fixtures;
        }
      }
    }

    async getTemplates() {
      const value = await this.api.get(this.base + '/contest-template').toPromise();
      if (value.status) {
        this.contestTemplates = value.data.contestTemplate;
      }
    }

    initFields() {
      let globalPercentagee = 0;
      this.fields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              defaultValue: this.fixtureId,
              key: 'fixture_id',
              hideExpression: !(!!this.fixtureId)
            },
            {
              key: 'fixture_id',
              type: 'select-search',
              className: 'col-12 col-md-3',
              templateOptions: {
                label: 'Fixture',
                required: true,
                options: this.fixtures,
              },
              expressionProperties: {
                'model.fixture_id': (model: any) => {
                  return model.fixture_id;
                }
              },
              hideExpression: !!this.fixtureId
            },
          ]
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'contest_category_id',
              type: 'select-search',
              className: 'col-12 col-md-3 col-lg-3',
              templateOptions: {
                label: 'Category',
                required: true,
                options: this.categories
              }
            },
            {
              key: 'type',
              type: 'select-search',
              className: 'col-12 col-md-3 col-lg-3',
              templateOptions: {
                label: 'Contest Type',
                options: [
                  { id: 'PAID', name: 'PAID' },
                  // { id: 'DISCOUNT', name: 'DISCOUNT' },
                  // { id: 'BONUS', name: 'BONUS' },
                  { id: 'FREE', name: 'FREE' },
                  { id: 'PRACTICE', name: 'PRACTICE' },
                  { id: 'MINI', name: 'MINI' },
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
              },
              expressionProperties: {
                'templateOptions.description': (model: any) => {
                  return 'Commission in Percentage (%)';
                },
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
                type: 'number',
                min: 0
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
              hideExpression: (model, formState) => {
                //return  model.type === 'PRACTICE' ? model.type === 'PRACTICE' :  model.type === 'BONUS';
                return  model.type === 'PRACTICE';
              },
              key: 'entry_fee',
              type: 'input',
              className: 'col-12 col-md-3 col-lg-3',
              templateOptions: {
                label: 'Entry fee',
                required: true,
                type: 'number',
                min: 0
              },
              expressionProperties: {
                'model.entry_fee': (model: any) => {
                  // tslint:disable-next-line:max-line-length radix
                  return Math.ceil((parseInt(model.prize) / parseInt(model.total_teams)) + (parseInt(model.commission) * parseInt(model.prize) / 100) / model.total_teams);
                },
                'templateOptions.description': (model: any) => {
                  return 'Profit will ' + ((model.total_teams * model.entry_fee) - model.prize);
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
              key: 'auto_create_on_full',
              type: 'select-search',
              className: 'col-12 col-md-3 col-lg-3',
              defaultValue: false,
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
              key: 'inning_number',
              //type: 'input',
              type: 'select-search',
              className: 'col-12 col-md-3 col-lg-3',
              defaultValue: 1,
              templateOptions: {
                label: 'Match Inning Number',
                required: true,
                options: this.inning_number
              },
              //hideExpression: '!model.inning_number',
              // expressionProperties: {
              //   'model.inning_number': (model: any) => {
              //     // tslint:disable-next-line:max-line-length radix
              //     return model.fixture_id;
              //   }
              // }
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
                  { id: 0, name: 'Normal' },
                  { id: 1, name: 'Dynamic' },
                ]
              },
              expressionProperties: {
                'model.is_dynamic': (model: any) => {
                  return model.is_dynamic;
                }
              },
              //hideExpression: '!model.is_dynamic',
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
          ]
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'status',
              type: 'select-search',
              className: 'col-12 col-md-3 col-lg-3',
              templateOptions: {
                label: 'Status',
                options: this.statuses,
                required: true
              }
            },
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
              className: 'col-12 col-md-3 col-lg-3',
              templateOptions: {
                label: 'Is Mega Contest',
                options: [
                  { id: true, name: 'Yes' },
                  { id: false, name: 'No' },
                ],
                required: true
              }
            },
            // GROUND TOTAL CODE
          {
            key: 'ground_total',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Ground Total',
              // required: true
              readonly: true,
            },
            // validators: {
            //   minNumber: {
            //     expression: this.totalNumberValidation,
            //     message: "is not a valid IP Address",
            //   },
            // },
            expressionProperties: {
              'model.ground_total': (model: any) => {
                // debugger
                this.groundtotal=0

                this.totalPrize = 60
                // console.log(this.tempModel.prize_breakup)
                this.tempModel.prize_breakup.forEach(element => {
                  this.groundtotal+=parseInt(element.showtotalprize)
                });

                // console.log(this.tempModel)
                return this.groundtotal;
              },
            }

          },
          {
            key: 'pdf.show',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Show',

              options: [
                { id: true, name: 'Yes' },
                { id: false, name: 'No' },
              ]
            }
          },
          {
            key: 'pdf.download',
            type: 'select-search',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Download',

              options: [
                { id: true, name: 'Yes' },
                { id: false, name: 'No' },
              ]
            },
          },

          {
            // hideExpression: (model, formState) =>{
            //   this.tempModel=model;
            //   return model.type === 'PRACTICE'
            // },
            key: 'pdf.message',
            type: 'input',
            className: 'col-12 col-md-3 col-lg-3',
            templateOptions: {
              label: 'Message',

              // type: 'decimal',
              // min: 0
            },
             //hideExpression: '!model.pdf.download',
          }

          ]
        },
        {
          template: `<h3><strong>Prize Breakup</strong></h3>`,
          hideExpression: (model) => model.type === 'PRACTICE',
        },
        // {
        //     fieldGroupClassName: 'row',
        //       fieldGroup: [
        //         {
        //           key: 'globaltotalpercentage',
        //           type: 'input',
        //           className: 'col-12 col-md-2',
        //           templateOptions: {
        //             label: 'Global Percentage',
        //             readonly: true,
        //           },
        //           expressionProperties: {
        //             'model.globaltotalpercentage': (model: any) => {
        //               this.globalPercentage=model.globaltotalpercentage;
        //               return model.globaltotalpercentage;
        //             }
        //           }
        //         },
        //       ],
        // },
        {
          hideExpression: (model, formState) => model.type === 'PRACTICE',
          fieldGroup: [{
            key: 'prize_breakup',
            type: 'repeat',
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
                      this.rto = parseInt(model.to) + 1;
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
                      //return model.globaltotalpercentage;
                      // else{
                      //   this.globalPercentage = parseInt(model.globaltotalpercentage);
                      //   return this.globalPercentage;
                      // }
                      // else{
                      //   console.log(model.globaltotalpercentage+"oooooooooooooooooooo");
                      //   this.globalPercentage = parseInt(model.showtotalpercentage)+ parseInt(model.percentage);
                      //   return this.globalPercentage;
                      // }
                      //this.globalPercentage = parseInt(model.showtotalpercentage)+ parseInt(model.percentage);
                      //return this.globalPercentage;
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
                      this.rto = parseInt(model.to) + 1;
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
        }
      ];
    }


    async add(model: any = {
      fixture_id: this.fixtureId,
      commission: 0,
      bonus: 0,
      prize_breakup: [{ from: 1, to: 1, input: '' }],
      max_team: 1,
      is_confirmed: false,
      is_mega_contest: false,
      is_practiced: false,
      rank_category: { prize_breakup: [{ from: 1, to: 1, percentage: '', prize: 0 }] },
      status: 'LIVE'
    }) {


      if (model.hasOwnProperty('rank_category')) {
        model.prize_breakup = model.rank_category.prize_breakup;
      }

      model.prize_breakup.map((res: any) => {
        res.prize = (model.prize * res.percentage / 100);
      });

      const value: any = await this.formService.show(this.fields, this.base, 'POST', model, {
        title: 'Create Contest',
        minWidth: '50vw',
        maxWidth: '90vw'
      });

      if (value) {
        await this.init();
      }
    }

    async addFromPool() {
      console.log(this.poolsTemplate);
      const dialog = await this.matDialog.open(this.poolsTemplate, { panelClass: 'selection-dialog' });

      const data = await dialog.afterClosed().toPromise();
      if (data) {
        await this.add(data);
      }
    }

    async edit(d: any) {
      const data = Object.assign({}, d);
      const value: any = await this.formService.show(this.fields, this.base + '/' + d.id, 'PUT', data, {
        title: 'Edit Contest',
        minWidth: '50vw',
        maxWidth: '90vw'
      });

      if (value) {
        await this.init();
      }
    }

    async remove(d) {

      const value: any = await this.formService.confirm('Confirmation', 'Are you sure you want to Cancel this Contest?');

      if (value) {
        const v: any = await this.api.get(this.base + '/cancel/' + d.id).toPromise();
        if (v.status) {
          await this.init();
        }
      }
    }

    async showPrizeBreakup($event: MouseEvent, d: any) {
      $event.preventDefault();
      $event.stopPropagation();
      if (!d.rank_category) {
        this.prizeBreakups = d.prize_breakup;
      } else {
        this.prizeBreakups = d.rank_category.prize_breakup;
        this.prizeBreakups.map((res) => {
          res.prize = (res.percentage * d.prize / 100);
        });
      }
      await this.matDialog.open(this.prizeBreakupTemplate, { panelClass: 'selection-dialog', minWidth: '320px' });
    }

    viewGeneratePdf(d){

      //d.pdf.link.link !=1 ? console.log(  d.pdf.link.indexOf("link") ) : console.log("nhi mila");
      if(d.pdf){
        if(d.pdf.links){
          return d.pdf.links
        }else{
          return false;
        }
      //console.log(d.pdf.link.link);
      }else{
        return false;
        //console.log('ppppppppppppppp');

      }
    }

    async generatedPdf(d) {

      const value: any = await this.formService.confirm('Confirmation', 'Are you sure you want to generate PDf?');

      if (value) {
        this.loader.show();


        const v: any = await this.api.get('kbdgeneratepdf/' + d.id).toPromise();

        if (v.status) {
          this.loader.hide();
          await this.init();
        }else{
          this.loader.hide();
          await this.init();

          //this.loader.hide()

        }
      }
    }

    linkadd(data){
      //if(data){
        this.popupData=data;
        if(this.dialogRef){
        const myTempDialog = this.dialog.open(this.dialogRef);

        myTempDialog.afterClosed().subscribe((res) => {
          // Data back from dialog
          console.log({ res });
        });
        }
      //}

    }
    checkGeneratePdf(d){
      if(d.pdf){
        if(d.pdf.links){
          return false;
        }else{
          return true;
        }
      }else{
        return true;
      }
    }

    async setParams() {
      const params = Object.assign(this.filter, { page: this.page, search: this.search, perPage: this.perPage });
      //await this.router.navigate(['/contests'], { queryParams: params });
      await this.init();
    }
  }
