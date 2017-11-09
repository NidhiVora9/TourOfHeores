import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { Router } from '@angular/router';
import { AppState } from '../reducers/index.reducer';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit{

  heroes: Hero[];
  selectedHero: Hero;
  oneWayBinding = 'One Way Binding';

  constructor(private heroService: HeroService, private router: Router) {
  }

  getHeroes(): void {
    // this.heroes = this.store.select('heroes');
     this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  onChange(refVar: any): void {
    this.oneWayBinding = refVar.value;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

addHero(name: string, strength: number): void {
    name = name.trim()
    if(!name) { return; }
    this.heroService.addHero({name, strength} as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
}

deleteHero(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
}


}
