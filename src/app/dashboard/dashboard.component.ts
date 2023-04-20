import {Component} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {DataService} from '../_services/data.service';
import {SelectionModel} from '@angular/cdk/collections';
import { HttpParams } from '@angular/common/http';

import {list} from '../animation';
import {Router} from '@angular/router';

import { Key } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [list]
})
export class DashboardComponent {
  base = 'dashboard';
  data: any;
  gameData:any;
  roleid :any;
  accesspage :any;
  selection = new SelectionModel<any>(true, []);

  constructor(private api: ApiService,
              private router: Router,
              private dataService: DataService) {
    this.dataService.setTitle('Dashboard');
    this.rolecheck().then();
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
      if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage.dashboard == 1)?true:false:true)){
        this.init().then();
      }else if(keys){
        this.router.navigateByUrl(keys).then();
      }else{
        this.router.navigateByUrl('dashboard').then();

      }
    }
  }

  async init() {
      const value = await this.api.get(this.base).toPromise();
      this.data = value.data.userdata;
  }

  async onOptionsSelected(selectdata){

    let params = new HttpParams();
    params = params.set('selectdata',selectdata);

    const value = await this.api.get(this.base,{ params }).toPromise();
    if (value.status) {
      this.data = value.data.userdata;
      this.gameData = value.data.gamedata;
    }
  }
}
