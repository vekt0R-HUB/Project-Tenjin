import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://localhost:7086/api/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<User[]>(url);
  }

  getUserByAlias(alias: string) {
    const url = `${this.baseUrl}/${alias}`;
    console.log(url)
    return this.http.get<User>(url).pipe(
      map((response) => {
        console.log(response); // log the response object to the console
        return response;
      }));
  }

  createUser(user: any): Observable<User> {
    const url = `${this.baseUrl}/user`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(url, user, { headers });
  }

  updateUser(user: any): Observable<User> {
    const url = `${this.baseUrl}/user`;
    return this.http.put<User>(url, user);
  }

  deleteUser(alias: string): Observable<any> {
    const url = `${this.baseUrl}/user/${alias}`;
    return this.http.delete<any>(url);
  }
}
