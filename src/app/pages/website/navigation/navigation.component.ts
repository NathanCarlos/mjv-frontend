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
  products: any = [];
  customerLogged: boolean = false;
  customerData: any;
  search: any;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private customerService: CustomerService) { }

  ngOnInit() {
    if (localStorage.getItem('customer')) {
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
        this.products = products;
      }, error => {
        console.log(error);
      })
  }

  listProductBySearchBar() {
    this.productService.getProductsBySearch(this.search).subscribe(
      products => {
        this.products = products;
      }, error => {
        console.log(error);
      }
    )
  }

  logout() {
    this.customerService.logout();
  }

}
