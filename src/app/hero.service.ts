import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter } from 'rxjs/operator/filter';
import { catchError, map, tap } from 'rxjs/operators';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import 'rxjs/add/operator/toPromise';


@Injectable()

export class HeroService {
    private heroesUrl = '/api/heroes';  // URL to web api

    constructor(private http: HttpClient, private  messageService: MessageService) { }

    // getHeroes(): Promise<Hero[]> {
    //     return Promise.resolve(HEROES);
    // }

    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', []))
            );
    }

    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/?id=${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    // }

    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error); // for demo purposes only
    //     return Promise.reject(error.message || error);
    // }

    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);

            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }


    /* for HTTP request and using observables */
    // getHero(id: number): Promise<Hero> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json().data as Hero)
    //         .catch(this.handleError);
    // }

}
