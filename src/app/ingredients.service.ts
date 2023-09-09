import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IngredientResponse } from './model/DTO/ingredient-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private httpClient: HttpClient) { }

  private readonly url ='https://localhost:7007/IngredientApi';

  getByRecipe(id:number):Observable<IngredientResponse[]>{
    return this.httpClient.get<IngredientResponse[]>(this.url+'/ByRecipe'+'/'+id);
  }

}
