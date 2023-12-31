import { Component, Input, inject } from '@angular/core';
import { IngredientResponse } from '../model/DTO/ingredient-response';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent {
  @Input() id?: number;
  @Input() onlyNames?: boolean;
  ingredients?: IngredientResponse[];
  private service: IngredientsService = inject(IngredientsService);

  constructor() {}

  ngOnInit() {
    if (this.id) {
      this.service.getByRecipe(this.id).subscribe({
        next: (res) => {
          this.ingredients = res;
        }
      });
    }
  }

  // getFloatQuantity(ingredient: IngredientResponse){
  //   if(ingredient.quantity!== undefined){
  //   return parseFloat(ingredient.quantity);
  //   console.log(ingredient.quantity);
  //   }
  //   console.log(ingredient.quantity);
  //   return undefined;
  // }

}
