import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model'
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[];

    // private recipes: Recipe[]
    // = [
    //     new Recipe(
    //         'Tasty Schnitzel',
    //         'A super-tasty Schnitzel - just awesome!',
    //         'https://upload.wikimedia.org/wikipedia/commons/9/92/Wiener_Schnitzel_in_Wachwitz_%281%29.JPG',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('French Fries', 20)
    //         ]
    //         ),
    //     new Recipe(
    //         'Big Fat Burger',
    //         'This is simply a test2',
    //         'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hamburger_%282%29.jpg',
    //         [
    //             new Ingredient('Buns', 2),
    //             new Ingredient('Salad', 1),
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Garlic Dip', 1)
    //         ]
    //         ),
    //   ];

    constructor(
      private shoppingListService: ShoppingListService,
      private store: Store<fromShoppingList.AppState>){}

    getRecipes(){
        //created new array of recipes. Only give a copy of the array.
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        // this.shoppingListService.addIngredients(ingredients)
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
