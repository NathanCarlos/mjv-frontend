import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/catalog/category.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  categorys: any = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategorys().subscribe(categorys => { 
      this.categorys = categorys;
      console.log(categorys);
    }, error => {
      console.log("Erro ao carregar categorias!");
    })
  }

}
