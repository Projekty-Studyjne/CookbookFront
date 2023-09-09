import { Component, inject } from '@angular/core';
import { RecipeResponse } from '../model/DTO/recipe-response';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent {
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
