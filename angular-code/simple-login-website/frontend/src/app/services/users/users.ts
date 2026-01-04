import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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

  url = environment.apiUrl + "/users"

  getUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.url)
  }
}
