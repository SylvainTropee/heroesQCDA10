import { Component } from '@angular/core';
import {JsonPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf

  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes : Array<any> // any[]

  constructor() {
    this.heroes = []
  }

  addHeroes() {
    this.heroes.push({name : "Hulk", image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"});
    this.heroes.push({name : "Wonder Woman", image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/720-wonder-woman.jpg"});
    this.heroes.push({name : "Buffy", image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/140-buffy.jpg"});
  }
}
