import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/catalog/category.service';
import { ProductService } from '../../../services/catalog/product.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  categorys: any = [];
  productsByCategory: any = [];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit() {
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

}
