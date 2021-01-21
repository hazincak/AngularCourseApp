import { Ingredient } from "../shared/ingredient.model";

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

//state = initialState asigns default values to function arguments. IF the argument no set.
export function shoppingListReducer(state = initialState, action){

}
