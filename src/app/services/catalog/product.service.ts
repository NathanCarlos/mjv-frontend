import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  headers: {
    'Content-Type': 'application/json'
  }

  constructor(private http: HttpClient) { 

  }

  getProducts(){
    return this.http.get(`${environment.apiBaseUrl}/product`, { headers: this.headers })
  }

  getProductById(id){
    return this.http.get(`${environment.apiBaseUrl}/product/${id}`, { headers: this.headers })
  }

  getProductsByCategoryId(id){
    return this.http.get(`${environment.apiBaseUrl}/product/category/${id}`, { headers: this.headers })
  }
  
}
