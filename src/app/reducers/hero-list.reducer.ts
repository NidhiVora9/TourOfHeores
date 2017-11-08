import { Component} from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import * as _ from 'lodash';
import { Actions } from '@ngrx/effects';
// import { Action } from '@ngrx/store';
import { HeroActions } from '../actions/hero-actions.component';


export type HeroListState = Hero[];
const  initialState: HeroListState = [];

export default function (state = initialState, action: Action) {
    switch (action.type) {
        case HeroActions.LoadHeroesSuccess: {
            return action.payload;
        }
        case HeroActions.addHeroSuccess: {
            return [...state, action.payload];
        }
        case HeroActions.saveHeroSuccess: {
            const index = _.findIndex(state, {id: action.payload.id});


            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    action.payload,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        case HeroActions.deleteHeroSuccess: {
            return state.filter(hero => hero.id !== action.payload.id);
        }
        default: {
            return state;
    }

    }
}