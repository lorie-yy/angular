import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'http://pic.666pic.com/thumbs2/1373322/87758906/api_thumb_450.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ],
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://goss1.vcg.com/creative/vcg/800/version23/VCG41137553311.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ],
    ),
  ];

  constructor(private slService:ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
