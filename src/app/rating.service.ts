import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RatingResponse } from './model/DTO/rating-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private httpClient:HttpClient) { }

  private readonly url='https://localhost:7007/RatingApi';

  getRatingsByRecipe(id:number): Observable<RatingResponse[]>{
    return this.httpClient.get<RatingResponse[]>(this.url+'/ByRecipe/'+id);
  }
}
