export class RecipeRequest {
  id: number;
  title: string;
  description: string;
  instructions: string;
  preparation_time: number;
  servings: number;

  constructor(  id: number,
    title: string,
    description: string,
    instructions: string,
    preparation_time: number,
    servings: number){

      this.id=id;
      this.title=title;
      this.description=description;
      this.instructions=instructions;
      this.preparation_time=preparation_time;
      this.servings=servings;
  }
}
