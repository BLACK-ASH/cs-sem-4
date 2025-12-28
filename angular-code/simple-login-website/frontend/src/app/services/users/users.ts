import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

export type UserType = {
  firstName: string,
  lastName: string,
  email: string,
  password: string
  _id: Object
}

@Injectable({
  providedIn: 'root',
})
export class Users {
 http = inject(HttpClient) 

 url = "http://localhost:3000/users"
  getUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.url)
  }
}
