import { Recipe } from './recipe.model'

export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
        new Recipe('A test recipe2', 'This is simply a test2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
      ];

    getRecipes(){
        //created new array of recipes. Only give a copy of the array. 
        return this.recipes.slice();
    }
}