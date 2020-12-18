import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { countries } from './services/countries-service-mockup';

interface RestServiceDetails {
  name: string;
  region: string;
  flag: string;
  population: number;
  capital: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public countries!: Array<string>;

  public continents!: Observable<Array<string>>;

  constructor(public httpClient: HttpClient) {

    this.continents =
      this.httpClient.get<Array<RestServiceDetails>>("https://restcountries.eu/rest/v2/all")
      .pipe(
        map((data) => this.extractContinents(data)),
      );


    const result =
                  this.httpClient.get<Array<RestServiceDetails>>("https://restcountries.eu/rest/v2/all")
         .pipe(
           tap((data) => this.extractContinents(data)),
           map((data) => this.extractCountries(data)),
           tap(countries => this.countries = countries)
         );
    result.subscribe((data) => {
      // console.log("Data im Subscribe: " + data);
    })
  }

  extractContinents(data: RestServiceDetails[]): Array<string> {
    const continentsWithDuplicates = data.map(
      country => country.region
    ).filter(continent => !!continent);
    return [...new Set(continentsWithDuplicates)]; // destructuring
  }


  extractCountries(data: RestServiceDetails[]) {
    const countries = data.map(country => country.name);
    return countries;
  }
}
