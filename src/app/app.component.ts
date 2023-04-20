import {Component} from '@angular/core';
import {AuthService} from './_services/auth.service';
import {FormService} from './_services/form.service';
import {ApiService} from './_services/api.service';

import {FormlyFieldConfig} from '@ngx-formly/core';
import {DataService} from './_services/data.service';
import {SubSink} from 'subsink';
import {SocketService} from './_services/socket.service';
import {MessagingService} from './_services/messaging.service';

interface Menu {
  children: Menu[];
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = this.dataService.title;
  isMobile: boolean;
  roleid :any;
  accesspage :any;
  message: any;
  sideLinks: Menu [] = [
    {
      name: 'Dashboard',
      url: 'dashboard',
      icon: 'dashboard',
      children: []
    },
    {
      name: 'Users',
      url: 'users',
      icon: 'people',
      children: []
    },
    {
      name: 'Wallet Manager',
      url: 'wallet',
      icon: 'payments',
      children: []
    },
    {
      name: 'Verification',
      url: 'verification',
      icon: 'verified',
      children: []
    },
    {
      name: 'Influencer',
      url: 'influencer',
      icon: 'people',
      children: []
    },
    {
      name: 'Earning Manager',
      url: '',
      children: [
        {
          name: 'Cricket Earning Manager',
          url: 'earning-manager',
          icon: 'payments',
          children: []
        },
        // {
        //   name: 'Football Earning Manager',
        //   url: 'ftearning-manager',
        //   icon: 'payments',
        //   children: []
        // },
        // {
        //   name: 'Kabaddi Earning Manager',
        //   url: 'kbdearning-manager',
        //   icon: 'payments',
        //   children: []
        // },
        // {
        //   name: 'Basketball Earning Manager',
        //   url: 'bkbearning-manager',
        //   icon: 'payments',
        //   children: []
        // },
        // {
        //   name: 'Baseball Earning Manager',
        //   url: 'bsbearning-manager',
        //   icon: 'payments',
        //   children: []
        // },
        // {
        //   name: 'Hockey Earning Manager',
        //   url: 'hkyearning-manager',
        //   icon: 'payments',
        //   children: []
        // },
      ],
      icon: 'emoji_events',

    },
    {
      name: 'Contest Categories',
      url: 'contest-categories',
      icon: 'category',
      children: []
    },
    {
      name: 'Contest Templates',
      url: 'contest-templates',
      icon: 'filter_frames',
      children: []
    },
    {
      name: 'Rank Categories',
      url: 'rank-categories',
      icon: 'emoji_events',
      children: []
    },
    {
      name: 'Cricket',
      url: '',
      children: [
        {
          name: 'Private Contests',
          url: 'private-contests',
          icon: 'playlist_add_check',
          children: []
        },
        {
          name: 'Competitions',
          url: 'competitions',
          icon: 'view_agenda',
          children: []
        },
        {
          name: 'Fixtures',
          url: 'fixtures',
          icon: 'class',
          children: []
        },
        {
          name: 'Contests',
          url: 'contests',
          icon: 'playlist_add_check',
          children: []
        },
        {
          name: 'Fantasy Points',
          url: 'fantasy-points',
          icon: 'star',
          children: []
        },
      ],
      icon: 'emoji_events',
    },

    // {
    //   name: 'Football',
    //   url: '',
    //   children: [
    //     {
    //       name: 'Private Contests',
    //       url: 'ftprivate-contests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Competitions',
    //       url: 'ftcompetitions',
    //       icon: 'view_agenda',
    //       children: []
    //     },
    //     {
    //       name: 'Fixtures',
    //       url: 'ftfixtures',
    //       icon: 'class',
    //       children: []
    //     },
    //     {
    //       name: 'Contests',
    //       url: 'ftcontests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Fantasy Points',
    //       url: 'ftfantasy-points',
    //       icon: 'star',
    //       children: []
    //     },
    //   ],
    //   icon: 'emoji_events',
    // },


    // {
    //   name: 'Kabaddi',
    //   url: '',
    //   children: [
    //     {
    //       name: ' Private Contests',
    //       url: 'kbdprivate-contests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Competitions',
    //       url: 'kbdcompetitions',
    //       icon: 'view_agenda',
    //       children: []
    //     },
    //     {
    //       name: 'Fixtures',
    //       url: 'kbdfixtures',
    //       icon: 'class',
    //       children: []
    //     },
    //     {
    //       name: 'Contests',
    //       url: 'kbdcontests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Fantasy Points',
    //       url: 'kbdfantasy-points',
    //       icon: 'star',
    //       children: []
    //     },
    //   ],
    //   icon: 'emoji_events',
    // },
    // {
    //   name: 'Basketball',
    //   url: '',
    //   children: [
    //     {
    //       name: ' Private Contests',
    //       url: 'bkbprivate-contests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Competitions',
    //       url: 'bkbcompetitions',
    //       icon: 'view_agenda',
    //       children: []
    //     },
    //     {
    //       name: 'Fixtures',
    //       url: 'bkbfixtures',
    //       icon: 'class',
    //       children: []
    //     },
    //     {
    //       name: 'Contests',
    //       url: 'bkbcontests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Fantasy Points',
    //       url: 'bkbfantasy-points',
    //       icon: 'star',
    //       children: []
    //     },
    //   ],
    //   icon: 'emoji_events',
    // },

    // {
    //   name: 'Baseball',
    //   url: '',
    //   children: [
    //     {
    //       name: ' Private Contests',
    //       url: 'bsbprivate-contests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Competitions',
    //       url: 'bsbcompetitions',
    //       icon: 'view_agenda',
    //       children: []
    //     },
    //     {
    //       name: 'Fixtures',
    //       url: 'bsbfixtures',
    //       icon: 'class',
    //       children: []
    //     },
    //     {
    //       name: 'Contests',
    //       url: 'bsbcontests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Fantasy Points',
    //       url: 'bsbfantasy-points',
    //       icon: 'star',
    //       children: []
    //     },
    //   ],
    //   icon: 'emoji_events',
    // },

    // {
    //   name: 'Hockey',
    //   url: '',
    //   children: [
    //     {
    //       name: ' Private Contests',
    //       url: 'hkyprivate-contests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Competitions',
    //       url: 'hkycompetitions',
    //       icon: 'view_agenda',
    //       children: []
    //     },
    //     {
    //       name: 'Fixtures',
    //       url: 'hkyfixtures',
    //       icon: 'class',
    //       children: []
    //     },
    //     {
    //       name: 'Contests',
    //       url: 'hkycontests',
    //       icon: 'playlist_add_check',
    //       children: []
    //     },
    //     {
    //       name: 'Fantasy Points',
    //       url: 'hkyfantasy-points',
    //       icon: 'star',
    //       children: []
    //     },
    //   ],
    //   icon: 'emoji_events',
    // },





    // {
    //   name: 'Subadmin Create',
    //   url: 'subadmin-create',
    //   icon: 'post_add',
    //   children: []
    // },
    {
      name: 'Referal User',
      url: 'referal-userlist',
      icon: 'people',
      children: []
    },
    // {
    //   name: 'Promoter',
    //   url: '',
    //   children: [
    //       {
    //         name: 'Promoter Referral Info',
    //         url: 'promoter-referral-info',
    //         icon: '',
    //         children: []
    //       },
    //       {
    //         name: 'Promoter Income Info',
    //         url: 'promoter-income-info',
    //         icon: '',
    //         children: []
    //       },
    //     ],
    //     icon: 'emoji_events',
    // },
    {
      name: 'Coupons',
      url: 'coupons',
      icon: 'redeem',
      children: []
    },
    {
      name: 'Payments',
      url: 'payments',
      icon: 'payments',
      children: []
    },
    {
      name: 'Withdraw',
      url: 'withdrawals',
      icon: 'payments',
      children: []
    },
    {
      name: 'TDS',
      url: 'tds',
      icon: 'money_off',
      children: []
    },
    {
      name: 'Notifications',
      url: 'notifications',
      icon: 'send',
      children: []
    },
    {
      name: 'Winners',
      url: 'winners',
      icon: 'emoji_events',
      children: []
    },
    {
      name: 'Settings',
      url: 'settings',
      icon: 'settings',
      children: []
    },
    {
      name: 'Others',
      url: '',
      children: [
        {
          name: 'States',
          url: 'states',
          icon: 'public',
          children: []
        },
        {
          name: 'Pages',
          url: 'pages',
          icon: 'pages',
          children: []
        },
        {
          name: 'Blogs Category',
          url: 'blog-category',
          icon: 'category',
          children: []
        },
        {
          name: 'Blogs',
          url: 'blogs',
          icon: 'post_add',
          children: []
        },
        {
          name: 'Banners',
          url: 'banners',
          icon: 'images',
          children: []
        },
        // {
        //   name: 'Website Banners',
        //   url: 'website-banners',
        //   icon: 'images',
        //   children: []
        // },
        {
          name: 'Faqs',
          url: 'faqs',
          icon: 'help',
          children: []
        },
      ],
      icon: 'emoji_events',
    },
  ];

  user;

  private subs = new SubSink();

  constructor(private authService: AuthService,
              private api: ApiService,
              private formService: FormService,
              public dataService: DataService,
              private socketService: SocketService) {
    // @ts-ignore
    document.title = this.title;
    this.init().then();

    this.subs.sink = this.dataService.isMobile.subscribe(value => this.isMobile = value);

    this.authService.user.subscribe(value => {

      //this.init().then();
      this.user = value;
    });

  }

  async init() {
    const value = await this.api.get("userrole").toPromise();
    if (value.status) {
      const data = value.data;
      this.roleid = data.role_id;
      this.accesspage = data.accesspage;
    }
  }

  async changePassword() {
    const fields: FormlyFieldConfig[] = [{
      validators: {
        validation: [
          {name: 'fieldMatch', options: {errorPath: 'password_confirmation'}},
        ],
      },
      fieldGroup: [
        {
          key: 'current_password',
          type: 'input',
          templateOptions: {
            label: 'Current Password',
            type: 'password',
            required: true
          }
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            label: 'New Password',
            type: 'password',
            required: true
          }
        },
        {
          key: 'password_confirmation',
          type: 'input',
          templateOptions: {
            label: 'Confirm Password',
            type: 'password',
            required: true
          }
        }
      ]
    }];
    await this.formService.show(fields, 'update/password', 'POST', {}, {title: 'Change Password', width: '300px'});
  }

  async logout() {
    await this.authService.logout();
    await this.socketService.disconnect();
  }
}
