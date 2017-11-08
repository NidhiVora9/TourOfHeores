import '@ngrx/core/add/operator/select';
import { compose } from '@ngrx/store';
import {combineReducers} from '@ngrx/store';
import heroListReducer, * as fromHeroList from './hero-list.reducer';
import heroReducer, * as fromHero from './hero.reducer';


export interface AppState {
    heroes: fromHeroList.HeroListState;
    hero:   fromHero.HeroState;
}

export const reducer = {
    heroes: heroReducer,
    heroList: heroListReducer
};

export default compose(combineReducers)({
    heroes: heroListReducer,
    hero: heroReducer
});
