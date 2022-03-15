import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PiService } from '../services/pi.service';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.css']
})
export class PiComponent implements OnInit {

  title : string = 'Popular Ingredients';
  ingredientsArray : any[];
  ingredientsApi : Observable<any>;

  constructor(private piService : PiService) {
    this.ingredientsArray = [];
    this.ingredientsApi = new Observable<any>();
  }

  ngOnInit(): void {
    this.getIngredients();
  }

  getIngredients() : void {
    this.ingredientsApi = this.piService.getIngredients();
    this.ingredientsApi.subscribe(result => {
      this.ingredientsArray = result.meals.filter((ingredient : any) => {
        if (/(popular)/.test(ingredient.strDescription)) {
          return ingredient.strDescription;
        }
      });
    }, error => {
      console.log(error.message);
    });
  }

}
