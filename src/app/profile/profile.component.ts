import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstName : string;
  email: string;

  constructor(private router : Router) {
    let loggedUserName = localStorage.getItem('first_name');
    this.firstName = (loggedUserName !== null) ? loggedUserName : '';

    let loggedUserEmail = localStorage.getItem('email');
    this.email = (loggedUserEmail !== null) ? loggedUserEmail : '';
  }

  ngOnInit(): void {
  }

  logout() : void {
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('email');
    this.router.navigate(['/']);
  }

}
