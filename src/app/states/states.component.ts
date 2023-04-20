import {Component} from '@angular/core';
import {ApiService} from '../_services/api.service';
import {DataService} from '../_services/data.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent {

  base = 'states';
  data = [];
  authUser;
  roleid :any;
  accesspage :any;
  slug:any;

  constructor(private api: ApiService,
              public dataService: DataService) {
    this.dataService.setTitle('States');
    this.rolecheck().then();

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
    this.slug='states';
    if(this.roleid==1 || (this.roleid == 2 ?(this.accesspage[this.slug] == 1)?true:false:true)){
      const params = new HttpParams();

      const value = await this.api.get(this.base, {params}).toPromise();
      if (value.status) {
        this.data = value.data.states;
      }
    }else{
      alert("You can't access this panel");
    }
  }

  async update(d) {
    await this.api.put(this.base + '/' + d.id, d).toPromise();
    await this.init();
  }
}
