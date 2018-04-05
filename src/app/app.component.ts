import {Component, Injectable} from '@angular/core';
import {DbService} from "./service/db.service";
import { AuthService } from './service/auth-service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

@Injectable()
export class AppComponent {
  version: string;
  version_list: string[];

  constructor(private db:DbService, private authService: AuthService) {
    this.version = "MySQL";
    this.version_list = [, "MySQL", "MongoDB", "Neo4j"]
  }
  title = 'app';
  setVersion(version){
    this.db.setDbVersion(version);
    this.version = this.version_list[version];
  }

  onLogout() {
    this.authService.logout();
  }

}
