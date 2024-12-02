import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsercrudserviceService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http :HttpClient) { }
  getUser():Observable<any>{
    return this.http.get(this.apiUrl)
  }
 
  updateUser(userId: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, updatedData); 
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${userId}`); 
  }
  addUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, userData);
  }
}
