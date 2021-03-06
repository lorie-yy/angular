import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipesChanged=new Subject<Recipe[]>();

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

  constructor(private slService:ShoppingListService){}

  setRecipes(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index]=newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index:number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
