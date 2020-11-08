import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model'

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'https://upload.wikimedia.org/wikipedia/commons/9/92/Wiener_Schnitzel_in_Wachwitz_%281%29.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
            ),
        new Recipe(
            'Big Fat Burger',
            'This is simply a test2',
            'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hamburger_%282%29.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Salad', 1),
                new Ingredient('Meat', 1),
                new Ingredient('Garlic Dip', 1)
            ]
            ),
      ];

    getRecipes(){
        //created new array of recipes. Only give a copy of the array. 
        return this.recipes.slice();
    }
}