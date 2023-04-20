import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtprivateContestsComponent } from './ftprivate-contests.component';


const routes: Routes = [
  {
    path: '',
    component: FtprivateContestsComponent
  },
  {
    path: 'private-contest-detail/:privateContestId',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtprivateContestsRoutingModule {
}
