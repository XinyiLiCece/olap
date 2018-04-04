import {Component, Injectable} from '@angular/core';
import {DbService} from "./service/db.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {
  constructor(private db:DbService) {}
  title = 'app';
  setVersion(version){
    this.db.setDbVersion(version);
  }

}
