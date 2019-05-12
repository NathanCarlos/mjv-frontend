import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/catalog/category.service';
import { ProductService } from '../../../services/catalog/product.service';
import { CustomerService } from '../../../services/customer/customer.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  categorys: any = [];
  productsByCategory: any = [];
  customerLogged: boolean = false;
  customerData: any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private customerService: CustomerService) { }

  ngOnInit() {
    if(localStorage.getItem('customer')){
      this.customerLogged = true;
      this.customerData = JSON.parse(localStorage.getItem('customer'));
    }
    this.categoryService.getCategorys().subscribe(categorys => { 
      this.categorys = categorys;
    }, error => {
      console.log("Erro ao carregar categorias!");
    })
  }

  listProductByCategoryId(id): void { 
    this.productService.getProductsByCategoryId(id).subscribe(
      products => {
        this.productsByCategory = products;
    }, error => {
      console.log(error);
    })
  }
  
  logout(){
    this.customerService.logout();
  }

}
