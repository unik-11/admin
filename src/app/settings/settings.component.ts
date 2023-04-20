import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../_services/api.service';
import {DataService} from '../_services/data.service';
import {AuthService} from '../_services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  roleid :any;
  accesspage :any;
  slug:any;
  base = 'settings';
  randomString='';
  teamForm = new FormGroup({});
  teamFields: FormlyFieldConfig[] = [];
  teamModel = {};

  withdrawForm = new FormGroup({});
  withdrawFields: FormlyFieldConfig[] = [];
  withdrawModel = {};

  miniForm = new FormGroup({});
  miniFields: FormlyFieldConfig[] = [];
  miniModel = {};

  mediaForm = new FormGroup({});
  mediaFields: FormlyFieldConfig[] = [];
  mediaModel = {};


  fakeForm = new FormGroup({});
  fakeFields: FormlyFieldConfig[] = [];
  fakeModel = {};

  adminloginForm = new FormGroup({});
  adminloginFields: FormlyFieldConfig[] = [];
  adminloginModel = {};

  teamUpdateTokenForm = new FormGroup({});
  teamUpdateTokenFields: FormlyFieldConfig[] = [];
  teamUpdateTokenModel = {};

  versionForm = new FormGroup({});
  versionFields: FormlyFieldConfig[] = [];
  versionModel = {};

  popupForm = new FormGroup({});
  popupFields: FormlyFieldConfig[] = [];
  popupModel = {};

  sportsTypeForm = new FormGroup({});
  sportsTypeFields: FormlyFieldConfig[] = [];
  sportsTypeModel = {};

  entityForm = new FormGroup({});
  entityFields: FormlyFieldConfig[] = [];
  entityModel = {};

  razorpayForm = new FormGroup({});
  razorpayFields: FormlyFieldConfig[] = [];
  razorpayModel = {};

  referralForm = new FormGroup({});
  referralFields: FormlyFieldConfig[] = [];
  referralModel = {};

  signupbonusForm = new FormGroup({});
  signupbonusFields: FormlyFieldConfig[] = [];
  signupbonusModel = {};



  tdsForm = new FormGroup({});
  tdsFields: FormlyFieldConfig[] = [];
  tdsModel = {};

  paymentGatewayForm = new FormGroup({});
  paymentGatewayFields: FormlyFieldConfig[] = [];
  paymentGatewayModel = {};

  PCCForm = new FormGroup({});
  PCCFields: FormlyFieldConfig[] = [];
  PCCModel = {};

  lvlForm = new FormGroup({});
  lvlFields: FormlyFieldConfig[] = [];
  lvlModel = {};

  PCSForm = new FormGroup({});
  PCSFields: FormlyFieldConfig[] = [];
  PCSModel = {};

  payoutGatewayForm = new FormGroup({});
  payoutGatewayFields: FormlyFieldConfig[] = [];
  payoutGatewayModel = {};

  cashfreeForm = new FormGroup({});
  cashfreeFields: FormlyFieldConfig[] = [];
  cashfreeModel = {};

  cashfreePayoutForm = new FormGroup({});
  cashfreePayoutFields: FormlyFieldConfig[] = [];
  cashfreePayoutModel = {};

  easebuzzpaypayoutForm = new FormGroup({});
  easebuzzpayoutModel: FormlyFieldConfig[] = [];
  easebuzzpayoutField = {};

  easebuzzpayinForm = new FormGroup({});
  easebuzzpayinFields: FormlyFieldConfig[] = [];
  easebuzzpayinModel = {};

  isCosoleBlocked;
  user;

  constructor(private authService: AuthService, private api: ApiService,private router: Router,
              public dataService: DataService) {
    this.dataService.setTitle('Settings');

    this.authService.user.subscribe(value => {
      this.user = value;
    });
    this.rolecheck().then();
  }

  async rolecheck() {
    const value = await this.api.get("userrole").toPromise();
    if (value.status) {
      const data = value.data;
      this.roleid = data.role_id;
      this.accesspage = data.accesspage;
      this.slug='settings';
      let keys = '';
      if(this.accesspage){
        keys = Object.keys(this.accesspage).filter((d)=>{
          return this.accesspage[d] == "1"
        })[0];
      }
      //location.reload()
      if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage.slug == 1)?true:false:true)){
        this.initTeamSettings().then();
        this.initWithdrawSettings().then();
        this.initVersionSettings().then();
        this.initPopupSettings().then();
        this.initSportsTypeSettings().then();
        this.initEntitySettings().then();
        this.initRazorpaySettings().then();
        this.initreferralSettings().then();
        this.inittdsSettings().then();
        this.inilvlSettings().then();
        this.initMiniApkSettings().then();
        this.initpcsSettings().then();
        this.signupBonusSettings().then();
        this.initSocialMediaSettings().then();
        this.initPaymentGatewaySettings().then();
        this.initPayoutGatewaySettings().then();
        this.initCashfreeSettings().then();
        this.initCashfreePayoutSettings().then();
        this.initEasebuzzPayinSettings().then();
        this.initEasebuzzPayoutSettings().then();
        this.fakeuserSetting().then();
        this.initAdminLoginSettings().then();
        this.initTeamUpdateTokenSettings().then();

      }else if(keys){
        this.router.navigateByUrl(keys).then();
      }else{
        this.router.navigateByUrl('dashboard').then();
      }
    }
  }

  async initTeamSettings() {
    const value = await this.api.get(this.base + '/teams').toPromise();
    if (value.status) {
      this.teamModel = value.data.teams;
      this.teamFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'min_players',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min players',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_players',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max players',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_players_per_team',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max players per team',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'min_wicket_keepers',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min Wicket Keepers',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_wicket_keepers',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max Wicket Keepers',
                type: 'number',
                required: true,
                min: 1
              }
            },

            {
              key: 'min_batsmen',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min Batsmen',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_batsmen',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max Batsmen',
                type: 'number',
                required: true,
                min: 1
              }
            },

            {
              key: 'min_all_rounders',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min all rounders',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_all_rounders',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max all rounders',
                type: 'number',
                required: true,
                min: 1
              }
            },

            {
              key: 'min_bowlers',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min bowlers',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_bowlers',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max bowlers',
                type: 'number',
                required: true,
                min: 1
              }
            },

          ]
        }
      ];
    }
  }

  async initWithdrawSettings() {
    const value = await this.api.get(this.base + '/withdraw').toPromise();
    if (value.status) {
      this.withdrawModel = value.data.withdraw;
      this.withdrawFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'min_amount',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min amount',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_amount',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max amount',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        }
      ];
    }
  }

  async initVersionSettings() {
    const value = await this.api.get('get?type=version').toPromise();
    if (value.status) {
      this.versionModel = value.data;
      this.versionFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'version'
            },
            {
              key: 'name',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Name',
                required: true,
              }
            },
            {
              key: 'code',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Code',
                type: 'number',
                required: true,
                min: 0
              }
            },
            {
              key: 'force_update',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'select-search',
              templateOptions: {
                label: 'Force Update?',
                options: [
                  {id: true, name: 'Yes'},
                  {id: false, name: 'No'},
                ]
              }
            },
            {
              key: 'description',
              className: 'col-12',
              type: 'textarea',
              templateOptions: {
                label: 'Description',
              }
            },
            {
              key: 'file',
              className: 'col-12',
              type: 'file',
              templateOptions: {
                label: 'APK file',
                floatLabel: 'always'
              }
            },
          ]
        }
      ];
    }
  }

  async initPopupSettings() {
    const value = await this.api.get(this.base +'/app_pop_up').toPromise();
    if (value.status) {
      this.popupModel = value.data.app_pop_up;
      this.popupFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'file',
              className: 'col-12',
              type: 'file',
              templateOptions: {
                label: 'Popup Image',
                floatLabel: 'always'
              }
            },
            {
              key: 'show',
              type: 'toggle',
              className: 'col-12',
              templateOptions: {
                label: 'show',
                appearance: 'none'
              }
            },
          ]
        }
      ];
    }
  }

  async initreferralSettings() {
    const value = await this.api.get(this.base + '/referral_price').toPromise();
    if (value.status) {
      this.referralModel = value.data;
      this.referralFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'referral_price',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Referral Bonus',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        }
      ];
    }
  }

  async inittdsSettings() {
    const value = await this.api.get(this.base + '/tds_deduction').toPromise();
    if (value.status) {
      this.tdsModel = value.data;
      this.tdsFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'tds_deduction',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'TDS Deduction %',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        }
      ];
    }
  }

  async inilvlSettings() {
    const value = await this.api.get(this.base + '/level_limit').toPromise();
    if (value.status) {
      this.lvlModel = value.data.level_limit;
      this.lvlFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'limit',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Level Limit',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        },
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'bonus',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Bonus',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        }
      ];
    }
  }

  async initpcsSettings() {
    const value = await this.api.get(this.base + '/private_contest').toPromise();
    if (value.status) {
      this.PCSModel = value.data.private_contest;
      this.PCSFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'min_contest_size',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min Contest Size',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_contest_size',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max Contest Size',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'min_entry_fee',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min Entry Fee',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_entry_fee',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max Entry Fee',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'min_allow_multi',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Min Allow Multi',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'max_allow_multi',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Max Allow Multi',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'commission_value',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Commission (%)',
                type: 'number',
                required: true,
                min: 1
              }
            },
            {
              key: 'commission_on_fee',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Commission On Fee',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        }
      ];
    }
  }

  async initMiniApkSettings() {
    const value = await this.api.get('get?type=mini_banner_ad').toPromise();
    if(value.data.status==1){
      value.data.status='true';
    }
    if(value.data.status==0){
      value.data.status='false';
    }
    if (value.status) {
      this.miniModel = value.data;
      this.miniFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'mini_banner_ad'
            },
            {
              key: 'status',
              type: 'select-search',
              templateOptions: {
                label: 'Active',
                required: true,
                options: [
                  {id:'true',name:'Active'},
                  {id:'false',name:'Deactive'}
                ]
              }
            },
            {
              key: 'url_type',
              type: 'select-search',
              templateOptions: {
                label: 'Baner url',
                required: true,
                options: [
                  {id:"app",name:'App'},
                  {id:"website",name:'Website'}
                ]
              }
            },
            {
              key: 'url',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Url',
                required: true,
              }
            },
            {
              key: 'image',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'file',
              templateOptions: {
                label: 'Image',
                floatLabel: 'always'
              }
            },
          ]
        }
      ];
    }
  }

  async initEntitySettings() {
    const value = await this.api.get('get?type=entity_sport').toPromise();
    if (value.status) {
      this.entityModel = value.data;
      this.entityFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'token',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Token',
                // required: true,
                type: 'text'
              }
            },
            // {
            //   key: 'football_token',
            //   className: 'col-12 col-sm-6',
            //   type: 'input',
            //   templateOptions: {
            //     label: 'Football Token',
            //     //required: true,
            //     type: 'text'
            //   }
            // },
            // {
            //   key: 'kabaddi_token',
            //   className: 'col-12 col-sm-6',
            //   type: 'input',
            //   templateOptions: {
            //     label: 'Kabaddi Token',
            //     // required: true,
            //     type: 'text'
            //   }
            // },
            // {
            //   key: 'basketball_token',
            //   className: 'col-12 col-sm-6',
            //   type: 'input',
            //   templateOptions: {
            //     label: 'Basketball Token',
            //     // required: true,
            //     type: 'text'
            //   }
            // },
            // {
            //   key: 'baseball_token',
            //   className: 'col-12 col-sm-6',
            //   type: 'input',
            //   templateOptions: {
            //     label: 'Baseball Token',
            //     // required: true,
            //     type: 'text'
            //   }
            // },
            // {
            //   key: 'hockey_token',
            //   className: 'col-12 col-sm-6',
            //   type: 'input',
            //   templateOptions: {
            //     label: 'Hockey Token',
            //     // required: true,
            //     type: 'text'
            //   }
            // }
          ]
        }
      ];
    }
  }

  async initRazorpaySettings() {
    const value = await this.api.get('get?type=razorpay').toPromise();
    if (value.status) {
      this.razorpayModel = value.data;
      this.razorpayFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'razorpay'
            },
            {
              key: 'access_key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Access key',
                required: true,
                type: 'password'
              }
            },
            {
              key: 'secret_key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Secret key',
                required: true,
                type: 'password'
              }
            },
            {
              key: 'account_number',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Bank Account Number',
                required: true,
                type: 'password',
                description: 'for withdrawal purpose'
              }
            },
            {
              key: 'webhook_secret',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Webhook secret',
                required: true,
                type: 'password'
              }
            },
          ]
        }
      ];
    }
  }

  async initPaymentGatewaySettings() {
    const value = await this.api.get(this.base + '/paymentgateway').toPromise();
    if (value.status) {
      this.paymentGatewayModel = value.data;
      this.paymentGatewayFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'paymentgateway',
            },
            {
              key: 'paymentgateway',
              type: 'select-search',
              templateOptions: {
                label: 'Payment Gateway',
                required: true,
                options: [
                  {id:"cashfree",name:'Cashfree'},
                  {id:"easebuzz",name:'Easebuzz'}
                ]
              }
            },
          ]
        }
      ];
    }
  }

  async initPayoutGatewaySettings() {
    const value = await this.api.get(this.base + '/payoutgateway').toPromise();
    if (value.status) {
      this.payoutGatewayModel = value.data;
      this.payoutGatewayFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'payoutgateway',
            },
            {
              key: 'payoutgateway',
              type: 'select-search',
              templateOptions: {
                label: 'Payout Gateway',
                required: true,
                options: [
                  {id:"cashfree",name:'Cashfree'},
                  {id:"easebuzz",name:'Easebuzz'}
                ]
              }
            },
          ]
        }
      ];
    }
  }

  async initCashfreeSettings() {
    const value = await this.api.get('get?type=cashfree').toPromise();
    if (value.status) {
      this.cashfreeModel = value.data;
      this.cashfreeFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'cashfree'
            },
            {
              key: 'access_key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Access key',
                required: true,
                type: 'text'
              }
            },
            {
              key: 'secret_key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Secret key',
                required: true,
                type: 'text'
              }
            }
          ]
        }
      ];
    }
  }

  async initCashfreePayoutSettings() {
    const value = await this.api.get('get?type=cashfree_payout').toPromise();
    if (value.status) {
      this.cashfreePayoutModel = value.data;
      this.cashfreePayoutFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'cashfree_payout'
            },
            {
              key: 'access_key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Access key',
                required: true,
                type: 'text'
              }
            },
            {
              key: 'secret_key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Secret key',
                required: true,
                type: 'text'
              }
            }
          ]
        }
      ];
    }
  }

  async initEasebuzzPayinSettings() {
    const value = await this.api.get('get?type=easebuzz_payin').toPromise();
    if (value.status) {
      this.easebuzzpayinModel = value.data;
      this.easebuzzpayinFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'easebuzz_payin'
            },
            {
              key: 'key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Key',
                required: true,
                type: 'text'
              }
            },
            {
              key: 'salt',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Salt',
                required: true,
                type: 'text'
              }
            },
            {
              key: 'surl',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Success Url',
                required: true,
                type: 'text'
              },
              expressionProperties: {

                'templateOptions.description': (model: any) => {
                  return 'https://api.mymaster11.com/wallet/verify-easebuzz';
                },
              }
            },
            {
              key: 'furl',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Fail Url',
                required: true,
                type: 'text'
              },
              // expressionProperties: {
              //   'templateOptions.description': (model: any) => {
              //     return 'https://api.mymaster11.com/wallet/verify-easebuzz';
              //   },
              // }
            },
          ]
        }
      ];
    }
  }

  async initEasebuzzPayoutSettings() {
    const value = await this.api.get('get?type=easebuzz_payout').toPromise();
    if (value.status) {
      this.easebuzzpayoutModel = value.data;
      this.easebuzzpayoutField = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'easebuzz_payout'
            },
            {
              key: 'key',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Key',
                required: true,
                type: 'text'
              }
            },
            {
              key: 'salt',
              className: 'col-12 col-sm-6',
              type: 'input',
              templateOptions: {
                label: 'Salt',
                required: true,
                type: 'text'
              }
            },
          ]
        }
      ];
    }
  }

  async signupBonusSettings() {
    const value = await this.api.get(this.base + '/signup_bonus').toPromise();
    if (value.status) {
      this.signupbonusModel = value.data;
      this.signupbonusFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'signup_bonus',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Signup Bonus',
                type: 'number',
                required: true,
                min: 1
              }
            },
          ]
        }
      ];
    }
  }

  async initSocialMediaSettings() {
    const value = await this.api.get(this.base + '/social-links').toPromise();

    if (value.status) {
      this.mediaModel = value.data['social-links'];
      this.mediaFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'type',
              defaultValue: 'social-links'
            },
            {
              key: 'instagram',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Instagram',
                required: true,
              }
            },
            {
              key: 'facebook',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Facebook',
                required: true,
              }
            },
            {
              key: 'twitter',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Twitter',
                required: true,
              }
            },
            {
              key: 'youtube',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Youtube',
                required: true,
              }
            },
            {
              key: 'telegram',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Telegram',
                required: true,
              }
            },
          ]
        }
      ];
    }
  }

  async fakeuserSetting(){
    const value = await this.api.get(this.base + '/fake_user').toPromise();

    if (value.status) {
      this.fakeModel = value.data['fake_user'];
      this.fakeFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'is_active',
              type: 'toggle',
              className: 'col-12',
              templateOptions: {
                label: 'Is active?',

                appearance: 'none'
              }
            },
          ]
        },
        {
          fieldGroup: [{
            key: 'user',
            type: 'repeat',
            templateOptions: {
              addText: 'Add More'
            },
            fieldArray: {
              fieldGroupClassName: 'row',
              fieldGroup: [
                {
                  key: 'real_user',
                  type: 'input',
                  className: 'col-4',
                  templateOptions: {
                    label: 'Real User',
                    required: true,
                    type: 'text',
                    min: 1
                  },


                },
                {
                  key: 'system_user',
                  type: 'input',
                  className: 'col-4',
                  templateOptions: {
                    label: 'System User',
                    required: true,
                    type: 'text',
                    min: 1
                  },

                }
              ]
            }
          }]
        }
      ];
    }
  }

  async initAdminLoginSettings() {
    const value = await this.api.get(this.base + '/admin_phone_number').toPromise();

    if (value.status) {
      this.adminloginModel = value.data;
      console.log(this.adminloginModel);
      this.adminloginFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key:'admin_phone_number',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'textarea',
              templateOptions: {
                label: 'Admin Phone Number',
                required: true,
                rows:10,
                cols:5
              },
              expressionProperties: {
                'templateOptions.description': (model: any) => {
                  return 'Please use | symbole between two numbers like 9999999999|8888888888';
                },
              }
            },

          ]
        }
      ];
    }
  }

  async initTeamUpdateTokenSettings() {


      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';
      for ( var i = 0; i < 25; i++ ) {
          this.randomString += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      console.log(this.randomString);

    const value = await this.api.get(this.base + '/team_update_token').toPromise();

    if (value.status) {
      this.teamUpdateTokenModel = value.data;
      console.log(this.teamUpdateTokenModel);
      this.teamUpdateTokenFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key:'team_update_token',
              className: 'col-12 col-sm-6 col-md-3',
              type: 'input',
              templateOptions: {
                label: 'Team Update Token',
                required: true,
                rows:10,
                cols:5
              },
              expressionProperties: {
                'templateOptions.description': (model: any) => {
                  return this.randomString;
                  //return 'Please use | symbole between two numbers like 9999999999|8888888888';
                },
              }
            },

          ]
        }
      ];
    }
  }

  async initSportsTypeSettings() {
    const value = await this.api.get(this.base +'/game_status').toPromise();
    if (value.status) {
      this.sportsTypeModel = value.data.game_status;
      this.sportsTypeFields = [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              key: 'cricket',
              type: 'toggle',
              className: 'col-6',
              templateOptions: {
                label: 'Cricket',
                appearance: 'none'
              }
            },
            // {
            //   key: 'football',
            //   type: 'toggle',
            //   className: 'col-6',
            //   templateOptions: {
            //     label: 'Football',
            //     appearance: 'none'
            //   }
            // },
            // {
            //   key: 'kabaddi',
            //   type: 'toggle',
            //   className: 'col-6',
            //   templateOptions: {
            //     label: 'Kabaddi',
            //     appearance: 'none'
            //   }
            // },
            // {
            //   key: 'basketball',
            //   type: 'toggle',
            //   className: 'col-6',
            //   templateOptions: {
            //     label: 'Basketball',
            //     appearance: 'none'
            //   }
            // },
            // {
            //   key: 'baseball',
            //   type: 'toggle',
            //   className: 'col-6',
            //   templateOptions: {
            //     label: 'Baseball',
            //     appearance: 'none'
            //   }
            // },
            // {
            //   key: 'hockey',
            //   type: 'toggle',
            //   className: 'col-6',
            //   templateOptions: {
            //     label: 'Hockey',
            //     appearance: 'none'
            //   }
            // },
          ]
        }
      ];
    }
  }


  async save(type) {
    let data;
    if (type === 'teams') {
      data = this.teamForm.value;
    } else if (type === 'withdraw') {
      data = this.withdrawForm.value;
    } else if (type === 'app_pop_up') {
      data = this.popupForm.value;
    } else if (type === 'game_status') {
      data = this.sportsTypeForm.value;
    } else if (type === 'referral_price') {
      data = this.referralForm.value;
    } else if (type === 'tds_deduction') {
      data = this.tdsForm.value;
    } else if (type === 'level_limit') {
      data = this.lvlForm.value;
    } else if (type === 'personal_contest_commission') {
      data = this.PCCForm.value;
    }else if (type === 'mini') {
      await this.api.post('set', this.miniForm.value).toPromise();
      return;
    } else if (type === 'entity_sport') {
      data = this.entityForm.value;
    } else if (type === 'razorpay') {
      await this.api.post('set', this.razorpayForm.value).toPromise();
      return;
    } else if (type === 'version') {
      await this.api.post('set', this.versionForm.value).toPromise();
      return;
    } else if (type === 'private_contest') {
      data = this.PCSForm.value;
    } else if (type === 'signup_bonus') {
      data = this.signupbonusForm.value;
    } else if (type === 'social-links') {
      data = this.mediaForm.value;
    } else if (type === 'admin_phone_number') {
      data = this.adminloginForm.value;
    } else if (type === 'team_update_token') {
      data = this.teamUpdateTokenForm.value;
    } else if (type === 'paymentgateway') {
      await this.api.post('set', this.paymentGatewayForm.value).toPromise();
      return;
    } else if (type === 'payoutgateway') {
      await this.api.post('set', this.payoutGatewayForm.value).toPromise();
      return;
    } else if (type === 'cashfree') {
      await this.api.post('set', this.cashfreeForm.value).toPromise();
      return;
    } else if (type === 'cashfree_payout') {
      await this.api.post('set', this.cashfreePayoutForm.value).toPromise();
      return;
    } else if (type === 'easebuzz_payout') {
      await this.api.post('set', this.easebuzzpaypayoutForm.value).toPromise();
      return;
    } else if (type === 'easebuzz_payin') {
      await this.api.post('set', this.easebuzzpayinForm.value).toPromise();
      return;
    } else if (type === 'fake_user') {
      data = this.fakeForm.value;
    }


    await this.api.put(this.base + '/' + type, data).toPromise();

  }
}
