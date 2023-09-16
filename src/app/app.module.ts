import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientComponent } from './ingredient/ingredient.component';
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { CategoryRecipeComponent } from './category-recipe/category-recipe.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { LogUserComponent } from './log-user/log-user.component';
import { RatingComponent } from './rating/rating.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    IngredientComponent,
    FullRecipeComponent,
    CategoryComponent,
    CategoryRecipeComponent,
    LogUserComponent,
    RatingComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
