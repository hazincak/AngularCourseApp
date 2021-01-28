
import { Ingredient } from "../../shared/ingredient.model";
// import { ADD_INGREDIENT } from './shopping-list.actions';
import * as ShoppingListActions from './shopping-list.actions';

export interface AppState {
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

//state = initialState asigns default values to function arguments. IF the argument no set.
export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions){
  switch (action.type){
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;

      return{
        ...state,
        ingredients: updatedIngredients
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      return{
        ...state,
        ingredients: state.ingredients.filter( (ingredient, ingredientIndex ) => {
          return ingredientIndex !== action.payload;
        })
      }

    default:
      return state;
  }
}
