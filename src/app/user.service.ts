import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './model/DTO/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  private readonly url = 'https://localhost:7007/UserApi';
  private isLoggedIn: boolean = false;
  private userId: number | null = null;

  setLoggedIn(status: boolean, userId: number | null) {
    this.isLoggedIn = status;
    this.userId = userId;
  }

  getIsLoggedIn() {
    return this.isLoggedIn;
  }

  getUserId() {
    return this.userId;
  }

  getUserByRating(id:number): Observable<UserResponse>{
    return this.httpClient.get<UserResponse>  (this.url+'/ByRating/'+id);
  }

}
