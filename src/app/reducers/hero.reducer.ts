
import { Hero } from '../hero';
import { Action } from '@ngrx/store';
import { HeroActions } from '../actions/hero-actions.component';

export type HeroState = Hero;

const initialState: HeroState = {
    id: 0,
    name: '',
    strength: 0
};

export default function(state = initialState, action: Action) {
    switch (action.type) {
        case HeroActions.ResetBlankHero: {
            return initialState;
        }
        case HeroActions.GetHeroSuccess: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
