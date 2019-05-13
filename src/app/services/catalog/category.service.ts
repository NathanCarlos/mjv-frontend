import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http: HttpClient) { }

  headers: {
    'Content-Type': 'application/json'
  }

  getCategorys(){
    return this.http.get(`${environment.apiBaseUrl}/category`, { headers: this.headers })
  }

}
