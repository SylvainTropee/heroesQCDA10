import { Routes } from '@angular/router';
import {AllHeroesComponent} from "./components/all-heroes/all-heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";

export const routes: Routes = [
  {path: "", component: AllHeroesComponent},
  {path: "heroes", component: AllHeroesComponent},
  {path: "heroes/:id", component: HeroDetailComponent},
  {path: "**", component: AllHeroesComponent},
];
