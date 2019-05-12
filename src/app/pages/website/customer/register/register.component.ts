import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CustomerService } from '../../../../services/customer/customer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _error = new Subject<string>();
  staticAlertClosed = false;
  errorMessage: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  telephone: string;
  postcode: string;
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._error.subscribe((message) => this.errorMessage = message);
    this._error.pipe(
      debounceTime(5000)
    ).subscribe(() => this.errorMessage = null);
  }

  submit() {
    const validate = this.validations();
    if(validate !== true){
      this.changeErrorMessage(validate)
      return false;
    }
    this.customerService.createCustomers(
      this.firstname,
      this.lastname,
      this.password,
      this.email,
      1,
      this.telephone,
      {
        postcode: this.postcode,
        street: this.street,
        number: this.number,
        neighborhood: this.neighborhood,
        complement: this.complement ? this.complement : '',
        city: this.city,
        state: this.state
      }).subscribe(
        customer => {
          localStorage.setItem('customer', JSON.stringify(customer));
          this.router.navigate(['/home']);
        },
        error => {
          this.changeErrorMessage('Este email já está em uso, utilize outro por favor!');
        }
      )

  }

  validations(){
    if(this.email === undefined || this.email === ''){
      return 'O campo email é obrigatório';
    }
    if(this.password === undefined || this.password === ''){
      return 'O campo senha é obrigatório';
    }
    if(this.firstname === undefined || this.firstname === ''){
      return 'O campo nome é obrigatório';
    }
    if(this.lastname === undefined || this.lastname === ''){
      return 'O campo sobrenome nome é obrigatório';
    }
    if(this.telephone === undefined || this.telephone === ''){
      return 'O campo telefone é obrigatório';
    }
    if(this.postcode === undefined || this.postcode === ''){
      return 'O campo cep é obrigatório';
    }
    if(this.state === undefined || this.state === ''){
      return 'O campo estado é obrigatório';
    }
    if(this.number === undefined || this.number === ''){
      return 'O campo número é obrigatório';
    }
    if(this.city === undefined || this.city === ''){
      return 'O campo cidade é obrigatório';
    }
    if(this.neighborhood === undefined || this.neighborhood === ''){
      return 'O campo bairro é obrigatório';
    }
    if(this.street === undefined || this.street === ''){
      return 'O campo rua é obrigatório';
    }
    return true;
  }

  public changeErrorMessage(message) {
    this._error.next(`${message}`);
  }

}
