import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private readonly BASE_URL: string = "https://akabab.github.io/superhero-api/api"

  constructor(private http : HttpClient) {

  }

  public findAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.BASE_URL}/all.json`)
  }

  public findHeroById(id: number) {

  }


}
