import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  title : string = 'Home';
  meal : string = '';
  mealThumb : string = '';
  randomMealApi : Observable<any>;
  loginUser : string = '';

  constructor(private homeService : HomeService) {
    this.randomMealApi = new Observable<any>();
  }

  ngOnInit(): void {
    this.checkLoginUser();
    this.infoRandomMeal();
  }

  infoRandomMeal() : void {
    this.randomMealApi = this.homeService.getRandomMeal();
    this.randomMealApi.subscribe(result => {
      this.meal = result.meals[0].strMeal;
      this.mealThumb = result.meals[0].strMealThumb;
    }, error => {
      console.log(error.message);
    });
  }

  checkLoginUser() : void {
    const loggedUser = localStorage.getItem('first_name');
    this.loginUser = (loggedUser != null) ? loggedUser : 'Stranger';
  }

}
