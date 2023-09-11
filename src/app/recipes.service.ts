import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecipeResponse } from './model/DTO/recipe-response';
import { IngredientResponse } from './model/DTO/ingredient-response';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private httpClient: HttpClient) {}

  private readonly url='https://localhost:7007/RecipesApi';

  get(): Observable<RecipeResponse[]>{
    return this.httpClient.get<RecipeResponse[]>(this.url);
  }

  getById(id:number): Observable<RecipeResponse>{
    return this.httpClient.get<RecipeResponse>(this.url+'/'+id);
  }

  getByCategory(id:number): Observable<RecipeResponse[]>{
    return this.httpClient.get<RecipeResponse[]>(this.url+'/ByCategory/'+id);
  }

  getRecipesByIngredientName(name:string):Observable<RecipeResponse[]>{
    return this.httpClient.get<RecipeResponse[]>(this.url+'/ByIngredient/'+name);
  }

  getRecipesByName(name:string):Observable<RecipeResponse[]>{
    return this.httpClient.get<RecipeResponse[]>(this.url+'/ByName/'+name);
  }
}
