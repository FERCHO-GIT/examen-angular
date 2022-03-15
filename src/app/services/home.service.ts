import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIPATH } from '../sources/api.path';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url : string;

  constructor(private httpClient : HttpClient) {
    this.url = `${environment.baseApiUrl}/${APIPATH.RANDOM}`;
  }

  getRandomMeal() : Observable<any> {
    return this.httpClient.get(this.url);
  }
}
