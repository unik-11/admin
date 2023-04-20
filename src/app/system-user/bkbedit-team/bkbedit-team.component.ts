import { Component, Input } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormService } from '../../_services/form.service';
import { DataService } from '../../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bkbedit-team',
  templateUrl: './bkbedit-team.component.html',
  styleUrls: ['./bkbedit-team.component.scss']
})
export class BkbeditTeamComponent {

  base = 'system-user-detail/bkbedit_team';
  data = [];
  gwkdata = [];
  sfdata = [];
  pgdata = [];
  pfdata=[];
  sgdata=[];
  cntdata=[];

  captData = [];
  leagueData = {};
  teamEditFrom = false;
  aTeamName = '';
  bTeamName = '';
  buttonshow = false;

  defcount = 0;
  alrcount = 0;
  pgcount=0;
  sfcount=0;
  sgcount=0;
  pfcount = 0;
  radrcount =0;
  cntcount=0;


  page = 0;
  total = 0;
  perPage = 0;
  isDisabled = true;
  submitPlayerData = [];
  filter: any = {};
  search = '';
  ermessage = '';
  creaditsLeft = 100;
  selecttotal_points=0;
  radioCheckarr = [];
  tab;
  type = ['WK', 'BAT', 'AR', 'BOWL'];
  teamData = [];


  @Input('fixtureId') fixtureId = '';
  @Input('contest_id') contest_id = '';
  @Input('user_teams_id') user_teams_id = '';
  constructor(private api: ApiService,
    private formService: FormService,
    public dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.activatedRoute.paramMap.subscribe(value => {
        if (value.get('fixtureId') && value.get('user_teams_id')) {
          this.fixtureId = value.get('fixtureId');
          this.contest_id = value.get('contest_id');
          this.user_teams_id = value.get('user_teams_id');

            this.smallForwardData().then();
            this.pointGuard().then();
            this.shootingGuardData().then();
            this.powerForwardData().then();
            this.centerData().then();
            this.dataService.setTitle('Edit Team User');

        }
      });
     }

    async smallForwardData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "SF");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.sfcount = data.selectedCount;
        this.sfdata = data.userdata;
        this.creaditsLeft -= data.allplayer_rating;
        this.selecttotal_points += data.total_points;

        let keys = Object.keys(data.totalPlayerAteam).map(k => {

          if (!this.teamData[k]) {
            this.teamData[k] = 0
          }
          this.teamData[k] = data.totalPlayerAteam[k] + this.teamData[k];

        })
        this.leagueData = data.fixtures;

      }
    }

    async pointGuard() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "PG");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.pgcount = data.selectedCount;
        this.pgdata = data.userdata;
        this.creaditsLeft -= data.allplayer_rating;
        this.selecttotal_points += data.total_points;

        let keys = Object.keys(data.totalPlayerAteam).map(k => {
          if (!this.teamData[k]) {
            this.teamData[k] = 0
          }
          this.teamData[k] = data.totalPlayerAteam[k] + this.teamData[k];
        })
      }
      //this.pgdata = value;
    }

    async shootingGuardData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "sg");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.sgcount = data.selectedCount;
        this.sgdata = data.userdata;

        this.creaditsLeft -= data.allplayer_rating;
        this.selecttotal_points += data.total_points;

        let keys = Object.keys(data.totalPlayerAteam).map(k => {
          if (!this.teamData[k]) {
            this.teamData[k] = 0
          }
          this.teamData[k] = data.totalPlayerAteam[k] + this.teamData[k];
        })
      }
    }

    async powerForwardData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "Pf");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.pfcount = data.selectedCount;
        this.pfdata = data.userdata;

        this.creaditsLeft -= data.allplayer_rating;
        this.selecttotal_points += data.total_points;

        let keys = Object.keys(data.totalPlayerAteam).map(k => {
          if (!this.teamData[k]) {
            this.teamData[k] = 0
          }
          this.teamData[k] = data.totalPlayerAteam[k] + this.teamData[k];
        })
      }
    }
    async centerData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "C");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.cntcount = data.selectedCount;
        this.cntdata = data.userdata;

        this.creaditsLeft -= data.allplayer_rating;
        this.selecttotal_points += data.total_points;

        let keys = Object.keys(data.totalPlayerAteam).map(k => {
          if (!this.teamData[k]) {
            this.teamData[k] = 0
          }
          this.teamData[k] = data.totalPlayerAteam[k] + this.teamData[k];
        })
      }
    }


    editTeamDataSubmit(value) {
      this.teamEditFrom = true;
      this.submitPlayerData = value;
      this.pgdata = this.pgdata.filter((f)=>
                          this.submitPlayerData[f.id] == 1);
      this.sfdata = this.sfdata.filter((f)=>this.submitPlayerData[f.id] == 1);

      this.sgdata = this.sgdata.filter((f)=>this.submitPlayerData[f.id] == 1);
      this.pfdata = this.pfdata.filter((f)=>this.submitPlayerData[f.id] == 1);
      this.cntdata = this.cntdata.filter((f)=>this.submitPlayerData[f.id] == 1);
      // console.log(JSON.stringify(this.pgdata)+"pgdata");
      // console.log(JSON.stringify(this.sfdata)+"sfdata");
      // console.log(JSON.stringify(this.gwkdata)+"gwkdata");
      // console.log(JSON.stringify(this.pgdata)+"pgdata");
    }

    pgCheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);
      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.pgcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.pgcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.pgdata);
    }

    sgCheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.sgcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.sgcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.sgdata);
    }

    sfCheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.sfcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.sfcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.sfdata);
    }

    pfCheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.pfcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.pfcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.pfdata);
    }

    cntCheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.cntcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.cntcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.cntdata);
    }


    bowlcheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);
      //console.log(JSON.stringify(this.pgdata)+"yyyyyy")
      // console.log(player_rating+"ppprrrrr");
      // console.log(this.creaditsLeft+"cccccc");

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.alrcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.alrcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.pgdata);
    }

    chckvalidate(team_name, id, _array) {
      let find = _array.find((f) => f.id == id)
      let fteam_name = find.team_name
      let total_player = this.teamData[this.leagueData['teama_short_name']] + this.teamData[this.leagueData['teamb_short_name']];

      if (this.teamData[team_name] >= 7 || total_player >= 11) {
        let dByTeam = _array.filter(f => {
          return f.team_name === fteam_name
        }).map(m => m.id)
        _array.map((m) => {
          if (dByTeam.includes(m.id)) {
            //m.isDisabled = 1
          }
        })
        this.isDisabled = true;
      } else {
        let dByTeam = _array.filter(f => {
          return f.team_name === fteam_name
        }).map(m => m.id)
        _array.map((m) => {
          if (dByTeam.includes(m.id)) {
            m.isDisabled = 0
          }
        })
        //console.log(dByTeam+"pppppppppppppp");
        this.isDisabled = false;
      }
      //console.log(this.teamData[team_name]+"yyyyyyyyyyYY");
      if (this.teamData[team_name] > 5 || this.teamData[this.leagueData['teamb_short_name']] > 5 || this.teamData[this.leagueData['teama_short_name']] > 5) {
        this.ermessage = "Select only 5 players per team";
        this.buttonshow = true;
      } else if (this.pgcount < 1 || this.pgcount > 4) {
        this.ermessage = "Please Select 1-4 Point Guard";
        this.buttonshow = true;
      }else if (this.sgcount < 1 || this.sgcount > 4) {
        this.ermessage = "Please Select 1-4 Shooting Guard";
        this.buttonshow = true;
      }else if (this.sfcount < 1 || this.sfcount > 4) {
        this.ermessage = "Please Select 1-4 Small Forward";
        this.buttonshow = true;
      }else if (this.pfcount < 1 || this.pfcount > 4) {
        this.ermessage = "Please Select 1-4 Power Forward";
        this.buttonshow = true;
      }else if (this.cntcount < 1 || this.cntcount > 4) {
        this.ermessage = "Please Select 1-4 Center";
        this.buttonshow = true;
      }else if (total_player > 8 || total_player < 8) {
        this.ermessage = "Please Select 8 Player in team.";
        this.buttonshow = true;
      } else if (this.creaditsLeft < 0) {
        this.ermessage = "Creadit balance not fulfill.";
        this.buttonshow = true;
      } else {
        this.ermessage = "";
        this.buttonshow = false;
      }
    }

    editFinalTeamDataSubmit(value) {
      if ((value.master_player == value.captain) || (value.master_player == value.vice_captain) || (value.vice_captain == value.captain) || (value.captain == value.vice_captain)) {
        this.ermessage = "Please choose correct data."
      } else {
        let _sub = this.submitPlayerData

        Object.keys(_sub).map(s => {
          if (_sub[s] != 1 || _sub[s] != true) {
            delete _sub[s]
          }
        })

        let _data = {
          capt_data: JSON.stringify(value),
          player_data: JSON.stringify(_sub),
          user_teams_id: this.user_teams_id,
          contest_id: this.contest_id
        }
        //console.log(_data);

        this.api.post(this.base, _data).subscribe((value) => {
          if (value.status) {
            console.log("success");
            this.router.navigate(['/system-user/' + this.fixtureId+'/basketball']);
          } else {
            console.log("error");
          }
        });
      }
    }

    backUrl() {
      this.teamEditFrom = false;
    }

}
