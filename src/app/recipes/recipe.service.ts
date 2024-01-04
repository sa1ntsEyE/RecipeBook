import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe 1 ',
      'this simply 1',
      'https://marketplace.canva.com/EAFNsV8XtFc/1/0/1067w/canva-white-modern-recipe-card-g0ij-n11PwM.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Cheese', 2),
      ]),
    new Recipe(
      'A test recipe 2',
      'this simply 2',
      'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg',
      [
        new Ingredient('Cheese', 252352),
        new Ingredient('Meat', 141),
      ])

  ];

  constructor(private shoppingListService : ShoppingListService) {
  }

  getRecepies() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList (ingredients : Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
