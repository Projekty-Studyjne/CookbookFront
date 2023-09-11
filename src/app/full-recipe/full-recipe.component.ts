import { Component, Input, inject } from '@angular/core';
import { RecipeResponse } from '../model/DTO/recipe-response';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute } from '@angular/router';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent {
  recipe?: RecipeResponse;

  private recipeService: RecipesService = inject(RecipesService);

  private route = inject(ActivatedRoute);

  constructor(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id){
    this.recipeService.getById(id).subscribe({
      next:(res)=>{
        this.recipe=res;
      }
    })
  }
}
}
