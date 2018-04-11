import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
    token: string;

    constructor(private httpClient: HttpClient,
                private router: Router) {};

    login(_username: string, _password: string) : Observable<Object>{
        return this.httpClient.post("http://adbm-final.herokuapp.com/api/user/login", {
            username: _username,
            password: _password
        });
    }

    logout() {
        this.token = undefined;
        this.router.navigate(["/"]);
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken() : string {
        return this.token;
    }

    isAuthened():boolean {
        return this.token != undefined;
    }
}
