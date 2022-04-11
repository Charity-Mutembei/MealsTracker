import { Component, OnInit } from '@angular/core';
import { Meals } from '../meals'

@Component({
  selector: 'app-meals-content',
  templateUrl: './meals-content.component.html',
  styleUrls: ['./meals-content.component.css']
})
export class MealsContentComponent implements OnInit {
  meals: Meals [] = [
    {}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
