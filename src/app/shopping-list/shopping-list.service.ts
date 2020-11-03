import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService{

    private ingredients: Ingredient[]= [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];
    
      constructor() { }
    
      ngOnInit(): void {
      }

      getIngredients(){
          return this.ingredients.slice();
      }
    
      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
      }
}