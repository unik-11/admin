import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtfantasyPointsComponent} from './ftfantasy-points.component';


const routes: Routes = [{
  path: '',
  component: FtfantasyPointsComponent
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FantasyPointsRoutingModule {
}
