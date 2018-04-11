import { Injectable } from '@angular/core';

@Injectable()
export class DbService {

  version='1';
  constructor() { }
  getDbVersion(){
    return this.version;
  }
  setDbVersion(version){
    console.log(version);
    this.version=version.toString();
  }
}
