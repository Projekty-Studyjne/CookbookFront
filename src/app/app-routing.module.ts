import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path: "", component: RecipeComponent },
  //{path: "", component: CategoryComponent},
  {path: 'recipe', component: FullRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }