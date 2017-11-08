import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { AppState } from '../reducers/index.reducer';
import { HeroActions } from '../actions/hero-actions.component';
import 'rxjs/add/operator/map';
import { HeroService } from '../hero.service';

@Injectable()

export class HeroEffects {
    constructor (
        private update$: Actions,
        private heroActions: HeroActions,
        private service: HeroService,
    ) {}

    @Effect() loadHeroes$ = this.update$
        .ofType(HeroActions.loadHeroes)
        .switchMap(() => this.service.getHeroes())
        .map(heroes => this.heroActions.loadHeroesSuccess(heroes));


}

