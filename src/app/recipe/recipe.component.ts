import { Component, inject } from '@angular/core';
import { RecipeResponse } from '../model/DTO/recipe-response';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipes?: RecipeResponse[];
  searchIngredientName:string='';
  searchName:string='';
  private service: RecipesService = inject(RecipesService);


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    this.loadAllRecipes();
  }

  loadAllRecipes(): void {
    this.service.get().subscribe({
      next:(res)=>{
        this.recipes=res;
      }
    })
  }

  getRecipesByIngredient(): void {
    if (this.searchIngredientName.trim() === '') {
      this.loadAllRecipes();
    } else {
      this.service.getRecipesByIngredientName(this.searchIngredientName).subscribe({
        next: (res) => {
          this.recipes = res;
        },
      });
    }
  }

  getRecipesByName(): void {
    if (this.searchName.trim() === '') {
      this.loadAllRecipes();
    } else {
      this.service.getRecipesByName(this.searchName).subscribe({
        next: (res) => {
          this.recipes = res;
        },
      });
    }
  }

}
