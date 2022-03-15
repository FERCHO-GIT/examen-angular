import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DishesService } from '../services/dishes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  title : string = 'Dishes';
  dishArray : any[];
  dishApi : Observable<any>;

  constructor(private dishesService : DishesService) {
    this.dishArray = [];
    this.dishApi = new Observable<any>();
  }

  ngOnInit(): void {
    this.getDishes();
  }

  getDishes() : void {
    this.dishApi = this.dishesService.getDishes();
    this.dishApi.subscribe(result => {
      console.log(result);
      this.dishArray = result.categories;
    }, error => {
      console.log(error.message);
    });
  }

}
