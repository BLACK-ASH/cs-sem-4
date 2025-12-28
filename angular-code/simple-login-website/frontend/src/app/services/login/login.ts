import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type LoginResponseType = {
  message: string
  token: string
  payload:string
}



@Injectable({
  providedIn: 'root',
})

export class Login {
  http = inject(HttpClient)

  url = "http://localhost:3000/login"
  
  login(data: any):Observable<LoginResponseType> {
    return this.http.post<LoginResponseType>(this.url, data)
  }
}
