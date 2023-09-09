import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeResponse } from './model/DTO/recipe-response';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}

  private readonly url='https://localhost:7007/RecipesApi';

  get(): Observable<RecipeResponse[]>{
    return this.httpClient.get<RecipeResponse[]>(this.url);
  }

}
