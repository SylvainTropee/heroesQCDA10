import { Component } from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroService} from "../../services/hero.service";
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    RouterLink,
    HttpClientModule,
    AsyncPipe
  ],
  providers : [HeroService],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes : Array<Hero> // hero[]
  public heroes$! : Observable<Hero[]> // hero[]

  constructor(private heroService : HeroService) {
    this.heroes = []
    this.addHeroes()
  }

  addHeroes() {
    this.heroService.findAllHeroes().subscribe(heroes => this.heroes = heroes)
    this.heroes$ = this.heroService.findAllHeroes()
  }
}




