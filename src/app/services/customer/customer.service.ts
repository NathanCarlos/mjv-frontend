import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  headers: {
    'Content-Type': 'application/json'
  }

  createCustomers(firstname, lastname, password, email, usersTypeId, telephone, address) {
    return this.http.post(`${environment.apiBaseUrl}/user/create`, {
      firstname,
      lastname,
      password,
      email,
      usersTypeId,
      telephone,
      address
    }, { headers: this.headers })
  }

  getUsersType() {
    return this.http.get(`${environment.apiBaseUrl}/user/usersType`, { headers: this.headers })
  }

  authentication(email, password) {
    return this.http.post(`${environment.apiBaseUrl}/user/auth`, { email, password }, { headers: this.headers })
  }

  logout() {
    localStorage.removeItem('customer');
  }
}
