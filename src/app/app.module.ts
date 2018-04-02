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


@NgModule({
  imports: [
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
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    QueryComponent,
    SqlComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
