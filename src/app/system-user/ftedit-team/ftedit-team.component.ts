import { Component, Input } from '@angular/core';
import { ApiService } from '../../_services/api.service';
import { FormService } from '../../_services/form.service';
import { DataService } from '../../_services/data.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ftedit-team',
  templateUrl: './ftedit-team.component.html',
  styleUrls: ['./ftedit-team.component.scss']
})
export class FteditTeamComponent {
  base = 'system-user-detail/ftedit_team';
  data = [];
  gwkdata = [];
  defdata = [];
  middata = [];
  strkdata = [];
  captData = [];
  leagueData = {};
  teamEditFrom = false;
  aTeamName = '';
  bTeamName = '';
  buttonshow = false;
  gkcount = 0;
  defcount = 0;
  strkcount = 0;
  midcount = 0;
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
          this.init().then(() => {
            this.defData().then();
            this.midData().then();
            this.stData().then();
            this.dataService.setTitle('Edit Team User');
          });
        }
      });
     }

    async init() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "Goalkeeper");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.gkcount = data.selectedCount;
        this.gwkdata = data.userdata;
        this.leagueData = data.fixtures;
        this.aTeamName = this.leagueData["teama_short_name"];
        this.bTeamName = this.leagueData["teamb_short_name"];
        this.captData = data.captain_data;
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
    async defData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "Defender");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.defcount = data.selectedCount;
        this.defdata = data.userdata;
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

    async midData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "Midfielder");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.midcount = data.selectedCount;
        this.middata = data.userdata;
        this.creaditsLeft -= data.allplayer_rating;
        this.selecttotal_points += data.total_points;

        let keys = Object.keys(data.totalPlayerAteam).map(k => {
          if (!this.teamData[k]) {
            this.teamData[k] = 0
          }
          this.teamData[k] = data.totalPlayerAteam[k] + this.teamData[k];
        })
        //this.leagueData = data.fixtures;
      }
      //this.middata = value;
    }

    async stData() {
      let params = new HttpParams();
      params = params.set('page', (this.page + 1).toString());
      params = params.set('per_page', this.perPage.toString());
      params = params.set('fixtureId', this.fixtureId);
      params = params.set('user_teams_id', this.user_teams_id);
      params = params.set('search', "Forward");
      const value = await this.api.get(this.base, { params }).toPromise();
      if (value.status) {
        const data = value.data;
        this.strkcount = data.selectedCount;
        this.strkdata = data.userdata;
        console.log(this.strkdata);
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
      this.middata = this.middata.filter((f)=>
                          this.submitPlayerData[f.id] == 1);
      this.defdata = this.defdata.filter((f)=>this.submitPlayerData[f.id] == 1);
      this.gwkdata = this.gwkdata.filter((f)=>this.submitPlayerData[f.id] == 1);
      this.strkdata = this.strkdata.filter((f)=>this.submitPlayerData[f.id] == 1);

      // console.log(JSON.stringify(this.middata)+"middata");
      // console.log(JSON.stringify(this.defdata)+"defdata");
      // console.log(JSON.stringify(this.gwkdata)+"gwkdata");
      // console.log(JSON.stringify(this.strkdata)+"strkdata");
    }

    wkcheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);
      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.gkcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.gkcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.gwkdata);
    }

    batcheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.defcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.defcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.defdata);
    }

    archeck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.midcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.midcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.middata);
    }

    bowlcheck(data, team_name, id, player_rating,total_points) {
      player_rating = parseFloat(player_rating);
      //console.log(JSON.stringify(this.strkdata)+"yyyyyy")
      // console.log(player_rating+"ppprrrrr");
      // console.log(this.creaditsLeft+"cccccc");

      if (data) {
        this.creaditsLeft -= player_rating;
        this.selecttotal_points+=total_points;
        this.strkcount += 1;
        this.teamData[team_name] += 1;
      } else {
        this.creaditsLeft += player_rating;
        this.selecttotal_points-=total_points;
        this.strkcount -= 1;
        this.teamData[team_name] -= 1;
      }
      this.chckvalidate(team_name, id, this.strkdata);
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
      if (this.teamData[team_name] > 7 || this.teamData[this.leagueData['teamb_short_name']] >7 || this.teamData[this.leagueData['teama_short_name']] >7) {
        this.ermessage = "Select only 7 players per team";
        this.buttonshow = true;
      } else if (this.gkcount == 0 || this.gkcount >1) {
        this.ermessage = "Please Select 1 GoalKeepers";
        this.buttonshow = true;
      } else if (this.defcount < 3 || this.defcount > 5) {
        this.ermessage = "Please Select Defender between 3 to 5.";
        this.buttonshow = true;
      } else if (this.strkcount < 1 || this.strkcount > 3) {
        this.ermessage = "Please Select Striker between 1 to 3.";
        this.buttonshow = true;
      } else if (this.midcount < 3 || this.midcount > 5) {
        this.ermessage = "Please Select Midfielder between 3 to 5.";
        this.buttonshow = true;
      } else if (total_player < 11 || total_player > 11) {
        this.ermessage = "Please Select 11 Player in team.";
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
            this.router.navigate(['/system-user/' + this.fixtureId+'/football']);
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
