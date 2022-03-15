import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pages : any[] = [];
  loginUser : string = '';

  constructor() { }

  ngOnInit(): void {
    this.pages = [
      { name : 'home', path : '/home'},
      { name: 'popular ingredients', path : '/popular-ingredients'},
      { name : 'dishes', path: '/dishes'},
      { name : 'login', path: '/login'}
    ];

    this.checkLoginUser();
  }

  checkLoginUser() : void {
    const loggedUser = localStorage.getItem('first_name');
    this.loginUser = (loggedUser != null) ? loggedUser : '';

    if (this.loginUser.length !== 0) {
      this.pages[this.pages.length - 1] = { name : 'profile', path: '/profile'};
    }
  }

}
