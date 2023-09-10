import { Component, inject } from '@angular/core';
import { CategoryResponse } from '../model/DTO/category-response';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
categories?: CategoryResponse[];

private service: CategoriesService = inject(CategoriesService);

constructor(){
  this.service.get().subscribe({
    next:(res)=>{
      this.categories=res;
    }
  })
}

}
