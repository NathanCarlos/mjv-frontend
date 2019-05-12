import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../../services/customer/customer.service';
import { Router } from '@angular/router'
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private _error = new Subject<string>();
  staticAlertClosed = false;
  errorMessage: string;

  email: string;
  password: string;

  constructor(private customerSerivce: CustomerService, private router: Router) {

  }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._error.subscribe((message) => this.errorMessage = message);
    this._error.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = null);
  }

  authenticate() {
    this.customerSerivce.authentication(this.email, this.password).subscribe(
      customer => {
        localStorage.setItem('customer', JSON.stringify(customer));
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.changeErrorMessage("Usuário ou senha inválidos!");
      }
    )
  }

  public changeErrorMessage(message) {
    this._error.next(`${message}`);
  }


}
