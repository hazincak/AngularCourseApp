import { Action } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

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

export class UpdateIngredient implements Action{
  readonly type = UPDATE_INGREDIENT;
  constructor(public payload: {index: number, ingredient: Ingredient}){}
}

export class DeleteIngredient implements Action{
  readonly type = DELETE_INGREDIENT;
  constructor(public payload: number){}
}

export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient;
