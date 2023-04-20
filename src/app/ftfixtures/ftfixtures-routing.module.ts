import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FtfixturesComponent} from './ftfixtures.component';


const routes: Routes = [{
    path: '',
    component: FtfixturesComponent
  },
  {
    path: 'ftfixture-detail/:fixtureId',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixturesRoutingModule {
}
