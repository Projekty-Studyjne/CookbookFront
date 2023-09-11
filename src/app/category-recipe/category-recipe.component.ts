import { Component, inject } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { RecipeResponse } from '../model/DTO/recipe-response';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category-recipe',
  templateUrl: './category-recipe.component.html',
  styleUrls: ['./category-recipe.component.css']
})
export class CategoryRecipeComponent {
  recipes?: RecipeResponse[];

  constructor(
    private service: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params
      .pipe(
        switchMap(params => {
          const id = Number(params['id']);
          return this.service.getByCategory(id);
        })
      )
      .subscribe({
        next: (res) => {
          this.recipes = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}
