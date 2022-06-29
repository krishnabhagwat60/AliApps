import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
//import { RegisterComponent } from './views/register/register.component';
import { AuthGuard } from './_guards';

export const routes: Routes = [
  {
    path: 'dashoard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    data: {title: 'Dashboard'}
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Register Page'
  //   }
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      // {
      //   path: 'base',
      //   loadChildren: './views/base/base.module#BaseModule'
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: './views/buttons/buttons.module#ButtonsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      // },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: {title: 'Dashboard'}
      },
      // {
      //   path: 'icons',
      //   loadChildren: './views/icons/icons.module#IconsModule'
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: './views/notifications/notifications.module#NotificationsModule'
      // },
      {
        path: 'withdrawals',
        loadChildren: './views/withdrawals/withdrawals.module#WithdrawalsModule',
        data: {title: 'Withdrawal Requests'}
      },
      {
        path: 'categories',
        loadChildren: './views/categories/categories.module#CategoriesModule',
        data: {title: 'Categories'}
      },
    
      {
        path: 'reports',
        loadChildren: './views/reports/reports.module#ReportsModule',
        data: {title: 'Reports'}
      },
      { 
        path: 'plans',
        loadChildren: './views/plans/plans.module#PlansModule',
        data: {title: 'Plan Management'}
      },
      {
        path: 'admin',
        loadChildren: './views/admin/admin.module#AdminModule',
        data: {title: 'Admin'}
      },
      {
        path: 'users',
        loadChildren: './views/users/users.module#UsersModule',
        data: {title: 'Users'}
      },
      {
        path: 'consultant',
        loadChildren: './views/consultant/consultant.module#ConsultantModule',
        data: {title: 'Consultant'}
      },      
      {
        path: 'degrees',
        loadChildren: './views/degrees/degrees.module#DegreesModule',
        data: {title: 'Degree'}
      },
      {
        path: 'language',
        loadChildren: './views/language/language.module#LanguageModule',
        data: {title: 'Language'}
      },
      {
        path: 'feedback',
        loadChildren: './views/feedback/feedback.module#FeedbackModule',
        data: {title: 'Feedback'}
      },
      {
        path: 'notification',
        loadChildren: './views/notification/notification.module#NotificationModule',
        data: {title: 'Notification'}
      },
      {
        path: 'configuration',
        loadChildren: './views/configuration/configuration.module#ConfigurationModule',
        data: {title: 'Configuration'}
      },
      {
        path: 'managesupplier/:id?',
        loadChildren: './views/managesupplier/managesupplier.module#ManagesupplierModule',
        data: {title: 'Manage Supplier'}
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
