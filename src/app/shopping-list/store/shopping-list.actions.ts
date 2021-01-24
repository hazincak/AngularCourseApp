import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient implements Action{
  //readonly is a TS feature that indicates to TS that this must never be changed from outside
  readonly type = ADD_INGREDIENT;
  //"payload" is NOT a name that needs to be used. The Action interface only forces to add a "type" property
  // payload: Ingredient;
  constructor(public payload: Ingredient){}
}

export class AddIngredients implements Action{
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredient[]){}
}

export type ShoppingListActions = AddIngredient | AddIngredients;
