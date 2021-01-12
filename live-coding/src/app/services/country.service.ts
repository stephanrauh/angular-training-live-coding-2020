import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RestServiceDetails } from '../rest-service-details';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  public continents!: Observable<Array<string>>;

  public countries!: Array<string>;

  public countriesByContinent!: {[continent: string]: Array<string>};

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
           tap((data) => this.extractCountriesByContinent(data)),
           map((data) => this.extractCountries(data)),
           tap(countries => this.countries = countries)
         );
    result.subscribe((data) => {
      // console.log("Data im Subscribe: " + data);
    })
  }

  private extractContinents(data: RestServiceDetails[]): Array<string> {
    const continentsWithDuplicates = data.map(
      country => country.region
    ).filter(continent => !!continent);
    return [...new Set(continentsWithDuplicates)]; // destructuring
  }


  private extractCountries(data: RestServiceDetails[]): Array<string> {
    const countries = data.map(country => country.name);
    return countries;
  }

  public extractCountriesByContinent(data: RestServiceDetails[]): void {
    const continentsWithDuplicates = data.map(
      country => country.region
    ).filter(continent => !!continent);

    const continents = [...new Set(continentsWithDuplicates)];

    const result: {[continent: string]: Array<string>} = {};
    continents.forEach(continent => result[continent] = data.filter(country => country.region === continent).map(country => country.name));
    this.countriesByContinent = result;
  }

  public extractCountryDetails(country: string): Observable<RestServiceDetails> {
    return this.httpClient.get<Array<RestServiceDetails>>(`https://restcountries.eu/rest/v2/name/${country}`)
    .pipe(
      map((data) => data[0]),
    );
  }
}
