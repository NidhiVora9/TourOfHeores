import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 11, name: 'Black Widow', strength : 7},
            {id: 12, name: 'Iron Man', strength : 9},
            {id: 13, name: 'Captain America', strength : 9},
            {id: 14, name: 'Hulk', strength : 10},
            {id: 15, name: 'Thor', strength : 9},
            {id: 16, name: 'Vision', strength : 9},
            {id: 17, name: 'HawkEye', strength : 9},
        ];
        return {heroes};
    }
}
