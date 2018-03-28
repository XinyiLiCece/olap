import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import {QueryComponent} from "./component/query/query.component";
import {LoginComponent} from "./component/login/login.component";
import {SqlComponent} from "./component/sql/sql.component";

const appRoutes: Routes = [
  { path: '',  component: QueryComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'query',  component: QueryComponent},
  { path: 'sql',  component: SqlComponent},

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
