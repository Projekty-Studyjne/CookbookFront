import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from './model/DTO/category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) {}
  
  private readonly url='https://localhost:7007/CategoryApi';

  get(): Observable<CategoryResponse[]>{
      return this.httpClient.get<CategoryResponse[]>(this.url);
    }
  
   }
