import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentQuery1Component } from './component/present-query1/present-query1.component'
import { PageNotFoundComponent }    from './not-found.component';
import { PresentQuery2Component } from './component/present-query2/present-query2.component';
import{ PresentQuery4Component } from './component/present-query4/present-query4.component';
import{ PresentQuery7Component } from './component/present-query7/present-query7.component';
import{ PresentQuery8Component } from './component/present-query8/present-query8.component';
import{ PresentQuery9Component } from './component/present-query9/present-query9.component';
import {LoginComponent} from "./component/login/login.component";
import {PresentQuery13Component} from "./component/present-query13/present-query13.component";
/**import {QueryComponent} from "./component/query/query.component";

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
*/

const appRoutes: Routes = [
  { path: '',  component:LoginComponent},
  { path: 'login',  component: LoginComponent},
  /*{ path: 'query',  component: QueryComponent},
  { path: 'sql',  component: SqlComponent},*/
  { path: 'present-query1',  component: PresentQuery1Component},
  { path:'present-query2', component: PresentQuery2Component },
  { path: 'present-query4',  component: PresentQuery4Component },
  { path: 'present-query7',  component: PresentQuery7Component }, 
  { path: 'present-query8',  component: PresentQuery8Component },

  { path: 'present-query9',  component: PresentQuery9Component },

  { path: 'present-query13',  component: PresentQuery13Component},
  

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
