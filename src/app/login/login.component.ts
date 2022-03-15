import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message : string = '';
  users : Array<LoginModel>;
  loginModel : LoginModel;
  loginServiceApi : Observable<any>;

  constructor(private loginService : LoginService, private router : Router) {
    this.users = new Array<LoginModel>();
    this.loginModel = new LoginModel("", "");
    this.loginServiceApi = new Observable<any>();
  }

  ngOnInit(): void { }

  checkCredentials(loginForm: NgForm) {
    if (loginForm.form.valid) {
      if (this.loginModel.email.length === 0 || this.loginModel.password.length === 0) {
        this.message = 'Type your email and password';
      } else {
        this.checkAndGetUser(this.loginModel.email, this.loginModel.password);
      }
    }
  }

  checkAndGetUser(email : string, password : string) : void {
    this.loginServiceApi = this.loginService.getUser();
    this.loginServiceApi.subscribe(result => {
      let user = result.filter((row : any) => {
        console.log(row.email === email, row.password === password);
        if (row.email === email && row.password === password) {
          return row;
        }
      });

      this.checkLoginUser(user);
    }, error => {
      console.log(error.message);
    });
  }

  checkLoginUser(user : Array<any>) : void {
    if (user.length > 0) {
      for (let row of user) {
        localStorage.setItem('first_name', row.first_name);
        localStorage.setItem('last_name', row.last_name);
        localStorage.setItem('email', row.email);
      }

      this.router.navigate(['/home']);
    } else {
      this.message = 'Invalid credentials!';
    }
  }

}
