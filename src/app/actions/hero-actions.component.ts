import { Injectable } from '@angular/core';
import { Action } from "@ngrx/store";

import { Hero } from '../hero';
// import { HeroService} from './hero.service';

@Injectable()

export class HeroActions {
    static loadHeroes: 'Load Heroes';
    static LoadHeroesSuccess = 'Load Heroes Success';
    static GetHero = 'Get Hero';
    static GetHeroSuccess = 'Get Hero Success';
    static ResetBlankHero = 'Reset Blank Hero';
    static saveHero = 'Save Hero';
    static saveHeroSuccess = 'Save Hero Success';
    static addHero = 'Add Hero';
    static addHeroSuccess = 'Add Hero Success';
    static deleteHero = 'Delete Hero';
    static deleteHeroSuccess = 'Delete Hero Success';

    loadHeroes(): Action {
        return {
            type: HeroActions.loadHeroes
        };
    }

    loadHeroesSuccess(heroes): Action {
        return {
            type: HeroActions.LoadHeroesSuccess,
            payload: heroes
        };
    }

    getHero(id): Action {
        return {
            type: HeroActions.GetHero,
            payload: id
        };
    }

    getHeroSuccess(hero): Action {
        return {
            type: HeroActions.GetHeroSuccess,
            payload: hero
        };
    }

    resetBlankHero(): Action {
        return {
            type: HeroActions.ResetBlankHero
        };
    }

    saveHero(hero): Action {
        return {
            type: HeroActions.saveHero,
            payload: hero
        };
    }

    saveHeroSuccess(hero): Action {
        return {
            type: HeroActions.saveHeroSuccess,
            payload: hero
        };
    }

    addHero(hero): Action {
        return {
            type: HeroActions.addHero,
            payload: hero
        };
    }

    addHeroSuccess(hero): Action {
        return {
            type: HeroActions. addHeroSuccess,
            payload: hero
        };
    }

    deleteHero(hero): Action {
        return {
            type: HeroActions.deleteHero,
            payload: hero
        };
    }

    deleteHeroSuccess(hero): Action {
        return {
            type: HeroActions.deleteHeroSuccess,
            payload: hero
        };
    }

}
