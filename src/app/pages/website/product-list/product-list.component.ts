import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/catalog/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: any = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
    }, error => {
      console.log(error);
    })
  }

}
