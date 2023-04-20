import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromoterIncomeModule } from './promoter/promoter-income/promoter-income.module';
import { PromoterModule } from './promoter/promoter.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'otp', loadChildren: () => import('./otp/otp.module').then(m => m.OtpModule) },

  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'reset-password/:token',
    loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'wallet',
    loadChildren: () => import('./users/wallet/wallet.module').then(m => m.WalletModule),
  },
  {
    path: 'competitions',
    loadChildren: () => import('./competitions/competitions.module').then(m => m.CompetitionsModule),
  },
  {
    path: 'fixtures',
    loadChildren: () => import('./fixtures/fixtures.module').then(m => m.FixturesModule),
  },
  {
    path: 'contests',
    loadChildren: () => import('./contests/contests.module').then(m => m.ContestsModule),
  },
  {
    path: 'contest-categories',
    loadChildren: () => import('./contest-categories/contest-categories.module').then(m => m.ContestCategoriesModule),
  },
  // {
  //   path: 'players',
  //   loadChildren: () => import('./players/players.module').then(m => m.PlayersModule),
  // },
  {
    path: 'states',
    loadChildren: () => import('./states/states.module').then(m => m.StatesModule),
  },
  {
    path: 'fantasy-points',
    loadChildren: () => import('./fantasy-points/fantasy-points.module').then(m => m.FantasyPointsModule),
  },
  {
    path: 'rank-categories',
    loadChildren: () => import('./rank-categories/rank-categories.module').then(m => m.RankCategoriesModule),
  },
  {
    path: 'contest-templates',
    loadChildren: () => import('./contest-templates/contest-templates.module').then(m => m.ContestTemplatesModule),
  },
  {
    path: 'payments',
    loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule),
  },
  {
    path: 'withdrawals',
    loadChildren: () => import('./withdrawls/withdrawls.module').then(m => m.WithdrawlsModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'banners',
    loadChildren: () => import('./banners/banners.module').then(m => m.BannersModule),
  },
  // {
  //   path: 'website-banners',
  //   loadChildren: () => import('./webbanners/webbanners.module').then(m => m.WebBannersModule),
  // },
  {
    path: 'blogs',
    loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule),
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then(m => m.FaqsModule),
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule),
  },
  {
    path: 'winners',
    loadChildren: () => import('./winners/winners.module').then(m => m.WinnersModule),
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then(m => m.VerificationModule),
  },
  {
    path: 'private-contests',
    loadChildren: () => import('./private-contests/private-contests.module').then(m => m.PrivateContestsModule),
  },



  {
    path: 'coupons',
    loadChildren: () => import('./coupons/coupons.module').then(m => m.CouponsModule),
  },
  {
    path: 'tds',
    loadChildren: () => import('./tds/tds.module').then(m => m.TdsModule),
  },
  {
    path: 'add-contest-templates/:fixtureId/:flag',
    loadChildren: () => import('./add-contest-templates/add-contest-templates.module').then(m => m.AddContestTemplatesModule),
  },
  {
    path: 'system-user/:fixtureId/:flag',
    loadChildren: () => import('./system-user/system-user.module').then(m => m.SystemUserModule),
  },
  {
    path: 'edit-team/:fixtureId/:contest_id/:user_teams_id',
    loadChildren: () => import('./system-user/edit-team/edit-team.module').then(m => m.EditTeamModule),
  },
  {
    path: 'ftedit-team/:fixtureId/:contest_id/:user_teams_id/:flag',
    loadChildren: () => import('./system-user/ftedit-team/ftedit-team.module').then(m => m.FteditTeamModule),
  },
  {
    path: 'kbdedit-team/:fixtureId/:contest_id/:user_teams_id/:flag',
    loadChildren: () => import('./system-user/kbdedit-team/kbdedit-team.module').then(m => m.KbdeditTeamModule),
  },
  {
    path: 'leaderboard/:competitionId',
    loadChildren: () => import('./competitions/leaderboard/leaderboard.module').then(m => m.LeaderboardModule),
  },
  {
    path: 'viewcron/:fixtureId',
    loadChildren: () => import('./fixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
  },
  {
    path: 'footballviewcron/:fixtureId',
    loadChildren: () => import('./ftfixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
  },
  {
    path: 'earning-manager',
    loadChildren: () => import('./earning-manager/earning-manager.module').then(m => m.EarningManagerModule),
  },
  {
    path: 'subadmin-create', loadChildren: () => import('./subadmin-create/subadmin-create.module').then(m => m.SubadminCreateModule)
  },
  {
    path: 'subadmin-permission/:userId',
    loadChildren: () => import('./subadmin-permission/subadmin-permission.module').then(m => m.SubadminPermissionModule),
  },
  {
    path: 'system-user-detail',
    loadChildren: () => import('./listsystem-user/listsystem-user.module').then(m => m.ListsystemUserModule)
  },
  {
    path: 'join-user/:fixtureId/:flag',
    loadChildren: () => import('./join-user/join-user.module').then(m => m.JoinUserModule),
  },
  {
    path: 'referal-userlist',
    loadChildren: () => import('./referal-userlist/referal-userlist.module').then(m => m.ReferalUserlistModule),
  },
  {
    path: 'promoter-referral-info',
    loadChildren: () => import('./promoter/promoter.module').then(m => PromoterModule),
  },
  {
    path: 'promoter-income-info',
    loadChildren: () => import('./promoter/promoter-income/promoter-income.module').then(m => PromoterIncomeModule),
  },
  {
    path: 'leaderboard-details/:leaderboardId/:user_id',
    loadChildren: () => import('./competitions/leaderboard/leaderboard-details/leaderboard-details.module').then(m => m.LeaderboardDetailsModule),
  },
  {
    path: 'all-viewcron',
    loadChildren: () => import('./fixtures/all-viewcron/all-viewcron-routing.module').then(m => m.AllViewcronRoutingModule),
  },
  {
    path: 'blog-category',
    loadChildren: () => import('./blog-category/blog-category.module').then(m => m.BlogCategoryModule),
    //loadChildren: () => import('./contest-categories/contest-categories.module').then(m => m.ContestCategoriesModule),

  },
  {
    path: 'ftprivate-contests',
    loadChildren: () => import('./ftprivate-contests/ftprivate-contests.module').then(m => m.FtprivateContestsModule),
  },
  {
    path: 'kbdprivate-contests',
    loadChildren: () => import('./kbdprivate-contests/kbdprivate-contests.module').then(m => m.KbdprivateContestsModule),
  },
  {
    path: 'kbdcompetitions',
    loadChildren: () => import('./kbdcompetitions/kbdcompetitions.module').then(m => m.KbdcompetitionsModule),
  },
  {
    path: 'kbdleaderboard/:competitionId',
    loadChildren: () => import('./kbdleaderboard/kbdleaderboard.module').then(m => m.KbdleaderboardModule),

  },

  {
    path: 'kbdfixtures',
    loadChildren: () => import('./kbdfixtures/kbdfixtures.module').then(m => m.KbdfixturesModule),
  },
  // {
  //   path: 'kabaddiviewcron/:fixtureId',
  //   loadChildren: () => import('./kbdfixtures/all-viewcron/all-viewcron.module').then(m => m.AllViewcronModule),
  //   // loadChildren: () => import('./ftfixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
  // },
  {
    path: 'kabaddiviewcron/:fixtureId',
    loadChildren: () => import('./kbdfixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
  },

  {
    path: 'kbdcontests',
    loadChildren: () => import('./kbdcontests/kbdcontests.module').then(m => m.KbdcontestsModule),
  },

  {
    path: 'kbdfantasy-points',
    loadChildren: () => import('./kbdfantasy-points/kbdfantasy-points.module').then(m => m.KbdfantasyPointsModule),
  },

  {
    path: 'kbdearning-manager',
    loadChildren: () => import('./kbdearning-manager/kbdearning-manager.module').then(m => m.KbdearningManagerModule),
  },
// bassket

{
  path: 'bkbprivate-contests',
  loadChildren: () => import('./bkbprivate-contests/bkbprivate-contests.module').then(m => m.BkbprivateContestsModule),
},
{
  path: 'bkbcompetitions',
  loadChildren: () => import('./bkbcompetitions/bkbcompetitions.module').then(m => m.BkbcompetitionsModule),
},
{
  path: 'bkbleaderboard/:competitionId',
  loadChildren: () => import('./bkbcompetitions/bkbleaderboard/bkbleaderboard.module').then(m => m.BkbleaderboardModule),

},
{
  path: 'bkbfixtures',
  loadChildren: () => import('./bkbfixtures/bkbfixtures.module').then(m => m.BkbfixturesModule),
},
{
  path: 'bkbfantasy-points',
  loadChildren: () => import('./bkbfantasy-points/bkbfantasy-points.module').then(m => m.BkbfantasyPointsModule),
},
{
  path: 'bkbearning-manager',
  loadChildren: () => import('./bkbearning-manager/bkbearning-manager.module').then(m => m.BkbearningManagerModule),
},


{
  path: 'bkbcontests',
  loadChildren: () => import('./bkbcontests/bkbcontests.module').then(m => m.BkbcontestsModule),
},
{
  path: 'bkbedit-team/:fixtureId/:contest_id/:user_teams_id/:flag',
  loadChildren: () => import('./system-user/bkbedit-team/bkbedit-team.module').then(m => m.BkbeditTeamModule),
},

// {
//   path: 'bkbcontests',
//   loadChildren: () => import('./bkbcontests/bkbcontests.module').then(m => m.BkbcontestsModule),
// },


{
  path: 'basketballviewcron/:fixtureId',
  loadChildren: () => import('./bkbfixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
},


// basketball end

// baseball Start

{
  path: 'bsbearning-manager',
  loadChildren: () => import('./bsbearning-manager/bsbearning-manager.module').then(m => m.BsbearningManagerModule),
},
{
  path: 'bsbcontests',
  loadChildren: () => import('./bsbcontests/bsbcontests.module').then(m => m.BsbcontestsModule),
},
{
  path: 'bsbfixtures',
  loadChildren: () => import('./bsbfixtures/bsbfixtures.module').then(m => m.BsbfixturesModule),
},


{
  path: 'baseballviewcron/:fixtureId',
  loadChildren: () => import('./bsbfixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
},
{
  path: 'bsbprivate-contests',
  loadChildren: () => import('./bsbprivate-contests/bsbprivate-contests.module').then(m => m.BsbprivateContestsModule),
},
{
  path: 'bsbcompetitions',
  loadChildren: () => import('./bsbcompetitions/bsbcompetitions.module').then(m => m.BsbcompetitionsModule),
},
{
  path: 'bsbleaderboard/:competitionId',
  loadChildren: () => import('./bsbcompetitions/bsbleaderboard/bsbleaderboard.module').then(m => m.BsbleaderboardModule),

},
{
  path: 'bsbfantasy-points',
  loadChildren: () => import('./bsbfantasy-points/bsbfantasy-points.module').then(m => m.BsbfantasyPointsModule),
},
{
  path: 'bsbedit-team/:fixtureId/:contest_id/:user_teams_id/:flag',
  loadChildren: () => import('./system-user/bsbedit-team/bsbedit-team.module').then(m => m.BsbeditTeamModule),
},
// baseball end


// *hockey start

{
  path: 'hkycontests',
  loadChildren: () => import('./hkycontests/hkycontests.module').then(m => m.HkycontestsModule),
},
{
  path: 'hkyfixtures',
  loadChildren: () => import('./hkyfixtures/hkyfixtures.module').then(m => m.HkyfixturesModule),
},
{
  path: 'hockeyviewcron/:fixtureId',
  loadChildren: () => import('./hkyfixtures/viewcron/viewcron-routing.module').then(m => m.ViewcronRoutingModule),
},
{
  path: 'hkyprivate-contests',
  loadChildren: () => import('./hkyprivate-contests/hkyprivate-contests.module').then(m => m.HkyprivateContestsModule),
},
{
  path: 'hkycompetitions',
  loadChildren: () => import('./hkycompetitions/hkycompetitions.module').then(m => m.HkycompetitionsModule),
},
{
  path: 'hkyleaderboard/:competitionId',
  loadChildren: () => import('./hkycompetitions/hkyleaderboard/hkyleaderboard.module').then(m => m.HkyleaderboardModule),

},
{
  path: 'hkyfantasy-points',
  loadChildren: () => import('./hkyfantasy-points/hkyfantasy-points.module').then(m => m.HkyfantasyPointsModule),
},
{
  path: 'hkyearning-manager',
  loadChildren: () => import('./hkyearning-manager/hkyearning-manager.module').then(m => m.HkyearningManagerModule),
},


// hockey  end


  {
    path: 'ftfixtures',
    loadChildren: () => import('./ftfixtures/ftfixtures.module').then(m => m.FtfixturesModule),
  },
  {
    path: 'ftcompetitions',
    loadChildren: () => import('./ftcompetitions/ftcompetitions.module').then(m => m.FtcompetitionsModule),
  },
  {
    path: 'ftcontests',
    loadChildren: () => import('./ftcontests/ftcontests.module').then(m => m.FtcontestsModule),
  },
  {
    path: 'ftfantasy-points',
    loadChildren: () => import('./ftfantasy-points/ftfantasy-points.module').then(m => m.FtfantasyPointsModule),
  },
  {
    path: 'ftleaderboard/:competitionId',
    loadChildren: () => import('./ftcompetitions/ftleaderboard/ftleaderboard.module').then(m => m.FtleaderboardModule),
  },
  {
    path: 'ftleaderboard-details/:leaderboardId/:user_id',
    loadChildren: () => import('./ftcompetitions/ftleaderboard/ftleaderboard-details/ftleaderboard-details.module').then(m => m.FtleaderboardDetailsModule),
  },
  {
    path: 'ftearning-manager',
    loadChildren: () => import('./ftearning-manager/ftearning-manager.module').then(m => m.FtearningManagerModule),
  },
  {
    path: 'influencer', loadChildren: () => import('./influencer/influencer.module').then(m => m.InfluencerModule)
  },
  {
    path: 'invoice/:paymentId',
    loadChildren: () => import('./invoice/invoice-routing.module').then(m => m.InvoiceRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
