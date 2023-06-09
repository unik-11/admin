import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KbdprivateContestsComponent } from './kbdprivate-contests.component';



const routes: Routes = [
  {
    path: '',
    component: KbdprivateContestsComponent
  },
  {
    path: 'private-contest-detail/:privateContestId',
    // loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KbdprivateContestsRoutingModule {
}
