import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbdfixturesComponent } from './kbdfixtures.component';

const routes: Routes = [{
path: '',
component: KbdfixturesComponent
},
{
path: 'kbdfixture-detail/:fixtureId',
loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdfixturesRoutingModule { }
