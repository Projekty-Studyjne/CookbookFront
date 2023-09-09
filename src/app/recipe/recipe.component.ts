import { Component, inject } from '@angular/core';
import { RecipeResponse } from '../model/DTO/recipe-response';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipes?: RecipeResponse[];

  private service: RecipesService = inject(RecipesService);

  constructor(){
    this.service.get().subscribe({
      next:(res)=>{
        this.recipes=res;
      }
    })
  }
}
