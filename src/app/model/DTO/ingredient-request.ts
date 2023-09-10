export class IngredientRequest {
  id: number;
  name: string;
  category: string;

  constructor(id: number, name: string, category: string) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
