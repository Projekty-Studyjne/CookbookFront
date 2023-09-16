import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentResponse } from './model/DTO/comment-response';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient:HttpClient) { }

  private readonly url='https://localhost:7007/CommentApi';

  getCommentByRating(id:number): Observable<CommentResponse>{
    return this.httpClient.get<CommentResponse>(this.url+'/ByRating/'+id);
  }
}
