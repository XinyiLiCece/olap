import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide=true;
  subscription: Subscription
  isSubmit: boolean;
  isFailed: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
    this.isSubmit = false;
    this.isFailed = false;
   }

  onSubmit(form: NgForm) {
    this.isSubmit = true;
    const username = form.value.username;
    const password = form.value.password;
    console.log(username);
    this.subscription = this.authService.login(username, password).subscribe(
      (res:{message: string, token: string}) => {
        this.authService.setToken(res.token);
        this.router.navigate(['/present-query1']);
      },
      () =>  {
        this.isFailed = true;
        this.isSubmit = false;
      }
    )
  }

  onChange() {
    this.isFailed = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }
}
