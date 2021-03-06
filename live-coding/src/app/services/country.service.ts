import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RestServiceDetails } from '../rest-service-details';

export interface CountryHashtable {
  [continent: string]: Array<string>;
}

export interface ICountryService {
  continents: Observable<Array<string>>;
  countries: Array<string>;
  countriesByContinent: Observable<CountryHashtable>;
}

@Injectable()
export class CountryService implements ICountryService {
  public continents = new BehaviorSubject<Array<string>>([]);

  public countries!: Array<string>;

  private _countriesByContinent = new BehaviorSubject<CountryHashtable>({});

  public countriesByContinent = this._countriesByContinent as Observable<CountryHashtable>;

  constructor(public httpClient: HttpClient) {
    const result = this.httpClient.get<Array<RestServiceDetails>>('https://restcountries.eu/rest/v2/all').pipe(
      tap((data) => this.continents.next(this.extractContinents(data))),
      tap((data) => this.extractCountriesByContinent(data)),
      map((data) => this.extractCountries(data)),
      tap((countries) => (this.countries = countries))
    );
    result.subscribe((data) => {
      // console.log("Data in subscribe callback: " + data);
    });
  }

  private extractContinents(data: RestServiceDetails[]): Array<string> {
    const continentsWithDuplicates = data.map((country) => country.region).filter((continent) => !!continent);
    return [...new Set(continentsWithDuplicates)]; // destructuring
  }

  private extractCountries(data: RestServiceDetails[]): Array<string> {
    const countries = data.map((country) => country.name);
    return countries;
  }

  public extractCountriesByContinent(data: RestServiceDetails[]): void {
    const continentsWithDuplicates = data.map((country) => country.region).filter((continent) => !!continent);

    const continents = [...new Set(continentsWithDuplicates)];

    const result: { [continent: string]: Array<string> } = {};
    continents.forEach(
      (continent) => (result[continent] = data.filter((country) => country.region === continent).map((country) => country.name))
    );
    this._countriesByContinent.next(result);
  }

  public extractCountryDetails(country: string): Observable<RestServiceDetails> {
    return this.httpClient.get<Array<RestServiceDetails>>(`https://restcountries.eu/rest/v2/name/${country}`).pipe(map((data) => data[0]));
  }
}
