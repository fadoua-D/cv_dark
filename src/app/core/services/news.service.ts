import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , tap} from 'rxjs';
import { News } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})


export class NewsService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=12';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]>{
    return this.http.get<News[]>(this.apiUrl)
    .pipe(
      tap(data => console.log('actualites ?? :', data)) 
    );
  }

  getNewsById(newsId: number): Observable<News>{
    return this.http.get<News>(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
    .pipe(
      tap(data => console.log('news details :', data)) 
    );
  }
}
