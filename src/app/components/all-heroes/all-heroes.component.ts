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
    this.heroes.push({name : "Hulk"});
    this.heroes.push({name : "Wonder Woman"});
    this.heroes.push({name : "Buffy"});
  }
}
