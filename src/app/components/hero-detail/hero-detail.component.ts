import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [HttpClientModule],
  providers : [HeroService],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id : string | null
  public hero : Hero | undefined

  constructor(private route : ActivatedRoute, private heroService: HeroService) {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id){
      this.heroService.findHeroById(+this.id)
        .subscribe(hero => this.hero = hero)
    }
  }

}











