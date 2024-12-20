import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private base_url: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {
      term: '',
      countries: [],
    },
    byCountry: {
      term: '',
      countries: [],
    },
    byRegion: {
      countries: [],
    },
  };
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private setLocalStorage() {
    localStorage.setItem('store', JSON.stringify(this.cacheStore));
  }
  private loadLocalStorage() {
    if (!localStorage.getItem('store')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('store')!);
  }
  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(catchError(() => of([])));
  }

  searchCapital(term: string): Observable<Country[]> {
    let url: string = `${this.base_url}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCapital = { term, countries })),
      tap(() => this.setLocalStorage())
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    let url: string = `${this.base_url}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byCountry = { term, countries })),
      tap(() => this.setLocalStorage())
    );
  }
  searchRegion(region: Region): Observable<Country[]> {
    let url: string = `${this.base_url}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap((countries) => (this.cacheStore.byRegion = { region, countries })),
      tap(() => this.setLocalStorage())
    );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http
      .get<Country[]>(
        `${this.base_url}/alpha/${code.toLocaleLowerCase().trim()}`
      )
      .pipe(
        map((countries) => (countries.length > 0 ? countries[0] : null)),
        catchError(() => of(null))
      );
  }
}
