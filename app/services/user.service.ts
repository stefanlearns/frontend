import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  backend = 'http://localhost:5000';



  register(user: User){
    return firstValueFrom(this.http.post(`${this.backend}/users/register`, user))
  }

}
