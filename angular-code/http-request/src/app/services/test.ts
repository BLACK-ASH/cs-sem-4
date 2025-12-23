import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export type PostInput = Omit<Post, 'id'>

@Injectable({
  providedIn: 'root',
})
export class Test {
  private http = inject(HttpClient)

  baseURL = 'https://jsonplaceholder.typicode.com/posts'

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseURL)
  }

  postPost(post: PostInput): Observable<Post> {
    console.log(post);
    return this.http.post<Post>(this.baseURL, post)
  }
}
