import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test',
      'http://img.25pp.com/uploadfile/soft/images/2014/0709/20140709060921344.jpg'),
    new Recipe('Another Test Recipe','This is simply a test',
      'http://img.25pp.com/uploadfile/soft/images/2014/0709/20140709060921344.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
