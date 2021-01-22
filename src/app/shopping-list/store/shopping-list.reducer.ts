
import { Ingredient } from "../../shared/ingredient.model";
// import { ADD_INGREDIENT } from './shopping-list.actions';
import * as ShoppingListActions from './shopping-list.actions';

const initialState = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]
};

//state = initialState asigns default values to function arguments. IF the argument no set.
export function shoppingListReducer(state = initialState, action: ShoppingListActions.AddIngredient){
  switch (action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
      default:
        return state;
  }
}
