import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../hero-mocks';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES;
  selectedHero ?: Hero;

  onSelect(hero: Hero) : void { 
    this.selectedHero = hero;
  }
}
