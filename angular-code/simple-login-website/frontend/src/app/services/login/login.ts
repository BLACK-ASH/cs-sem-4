import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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

  url = environment.apiUrl + "/login"
  
  login(data: any):Observable<LoginResponseType> {
    return this.http.post<LoginResponseType>(this.url, data)
  }
}
