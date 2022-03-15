import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIPATH } from '../sources/api.path';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url : string;

  constructor(private httpClient : HttpClient) {
    this.url = `${APIPATH.LOGIN}`;
  }

  getUser() : Observable<any> {
    return this.httpClient.get(this.url);
  }
  
}
