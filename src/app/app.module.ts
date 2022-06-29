import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, TitleCasePipe } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptorProviders } from '../app/http-interceptors/index';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppService } from './_services/shared.service';
import { MissionService } from './_services';
// Import containers
import { DefaultLayoutComponent } from './containers';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
// import { RegisterComponent } from './views/register/register.component';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';
import { TwoDigitDecimaNumberDirective } from './two-digit-decima-number.directive';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};



const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,

} from '@coreui/angular';
import { UsersModule } from './views/users/users.module';
import { AdminModule } from './views/admin/admin.module';
import { ConsultantModule } from './views/consultant/consultant.module';
import { CategoriesModule } from './views/categories/categories.module';
import { ReportsModule } from './views/reports/reports.module';
import { ComponentEditComponent } from './views/component/component-edit/component-edit.component';

import { DegreesModule } from './views/degrees/degrees.module';
import { LanguageModule } from './views/language/language.module';
import { PlansModule } from './views/plans/plans.module';
import { FeedbackModule } from './views/feedback/feedback.module';
import { NotificationModule } from './views/notification/notification.module';
import { WithdrawalsModule } from './views/withdrawals/withdrawals.module';
import { ConsultantTransactionsComponent } from './view/consultant/consultant-transactions/consultant-transactions.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { UsersComponent } from './views/users/users.component';
import { ConsultantComponent } from './views/consultant/consultant.component';
import { BsModalService } from 'ngx-bootstrap/modal';





@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    DashboardModule,
    PlansModule,
    NgbModule,
    WithdrawalsModule,
    CategoriesModule,
    DegreesModule,
    LanguageModule,
    NgDatepickerModule,
    ModalModule.forRoot()

  ],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    ComponentEditComponent,
    ConsultantTransactionsComponent
    // WithdrawalsComponent,
    // ReportsComponent,
    // TwoDigitDecimaNumberDirective


  ],
  providers: [httpInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,

    },

    BsModalService,
    NgbActiveModal, DatePipe, TitleCasePipe, AppService, MissionService],
  bootstrap: [AppComponent],

})
export class AppModule { }
