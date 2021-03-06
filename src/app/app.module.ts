import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';


import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent }   from './not-found.component';
import { LoginComponent } from './component/login/login.component';
import { QueryComponent } from './component/query/query.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SqlComponent } from './component/sql/sql.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PresentQuery1Component } from './component/present-query1/present-query1.component';
import { PresentQuery2Component } from './component/present-query2/present-query2.component';
import { PresentQuery4Component } from './component/present-query4/present-query4.component';
import { PresentQuery8Component } from './component/present-query8/present-query8.component';
import {HttpClientModule} from "@angular/common/http";
import {DbService} from "./service/db.service";
import {AuthService} from './service/auth-service';
<<<<<<< HEAD
import { PresentQuery7Component } from './component/present-query7/present-query7.component';

import { PresentQuery9Component } from './component/present-query9/present-query9.component';
=======
import { PresentQuery13Component } from './component/present-query13/present-query13.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
>>>>>>> upstream/master

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
<<<<<<< HEAD

    FormsModule,
=======
    MatTableModule,
    CdkTableModule
>>>>>>> upstream/master
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    QueryComponent,
    SqlComponent,
    PresentQuery1Component,
    PresentQuery2Component,
    PresentQuery4Component,
    PresentQuery8Component,
<<<<<<< HEAD
    PresentQuery7Component,
    PresentQuery9Component,
=======
    PresentQuery13Component
>>>>>>> upstream/master
  ],
  providers: [DbService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
