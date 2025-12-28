import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type RegisterResponseType = {
  message: string
  token: string
  payload:string
}

@Injectable({
  providedIn: 'root',
})

export class Register {
 http = inject(HttpClient) 

 url = "http://localhost:3000/register"
 register(data: any): Observable<RegisterResponseType> {
    return this.http.post<RegisterResponseType>(this.url, data)
  }
}
