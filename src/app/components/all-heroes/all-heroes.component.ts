import { Component } from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroService} from "../../services/hero.service";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    RouterLink

  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes : Array<Hero> // hero[]

  constructor(private heroService : HeroService) {
    this.heroes = []
  }

  addHeroes() {
    this.heroes = this.heroService.findAllHeroes()
  }
}




