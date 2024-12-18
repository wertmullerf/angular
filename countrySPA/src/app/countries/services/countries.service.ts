import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private base_url: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchCapital(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(
        `${this.base_url}/capital/${term.toLocaleLowerCase().trim()}`
      )
      .pipe(catchError(() => of([])));
  }

  searchCountry(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(
        `${this.base_url}/name/${term.toLocaleLowerCase().trim()}`
      )
      .pipe(catchError(() => of([])));
  }
  searchRegion(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(
        `${this.base_url}/region/${term.toLocaleLowerCase().trim()}`
      )
      .pipe(catchError(() => of([])));
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
