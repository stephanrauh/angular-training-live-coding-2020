import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { RestServiceDetails } from '../rest-service-details';
import { CountryHashtable } from './country.service';

@Injectable({
  providedIn: 'root'
})
export class NestedRestCallsService {

  constructor(private httpClient: HttpClient) { }

  /**
   * returns the hashmap of continents and their countries
   */
  public continentsToCountryHashMap(): CountryHashtable {
    const hashmap: CountryHashtable = {};

    this.continents().subscribe(
      listOfContinents => {
        listOfContinents.forEach(continent => {
          this.countryNamesByContinent(continent).subscribe(
            countries => hashmap[continent] = countries
          )
        })
      }
    );
    return hashmap;
  }

  public arrayOfCountries(): Observable<string[][]> {
    const continents = ["Europe", "Asia", "Africa"];

    const listOfObservables: Array<Observable<Array<string>>> = continents.map(continent => this.countryNamesByContinent(continent));

    const result: Observable<string[][]> = forkJoin(listOfObservables);

    return result;
    /**
     * <div *ngFor="let listOfCountries of arrayOfCountries() | async)">
     *    {{listOfCountries}}
     * </div>
     */
  }

  public hashMapOfCountriesWithPredefinedContinents(): Observable<CountryHashtable> {
    const continents = ["Europe", "Asia", "Africa"];

    const listOfObservables = continents.map(continent => {
      return {
        continent: continent,
        countries: this.countryNamesByContinent(continent)}
      });

    // TODO: convert it to an Observable containing a CountryHashtable
    const result = forkJoin(listOfObservables);

    return result;
  }

  public hashMapOfCountries(): Observable<string[][]> {
    const result = this.httpClient
      .get<Array<RestServiceDetails>>('https://restcountries.eu/rest/v2/all')
      .pipe(
        map((data) => this.extractContinentsFromRawData(data)),
        map(listOfContinents => listOfContinents.map(continent => this.countryNamesByContinent(continent))),
        map(x => forkJoin(x)),
        mergeMap(x => x),
        );
    return result;
  }

  public continents(): Observable<string[]> {
     return this.httpClient
      .get<Array<RestServiceDetails>>('https://restcountries.eu/rest/v2/all')
      .pipe(
        map((data) => this.extractContinentsFromRawData(data))
        );
  }

  public countryNamesByContinent(continent: string): Observable<string[]> {
    return this.httpClient.get<Array<RestServiceDetails>>(`https://restcountries.eu/rest/v2/region/${continent}`)
                 .pipe(
                  map(rawDataArray => this.extractCountryNamesFromRawData(rawDataArray))
                 );
  }



  private extractContinentsFromRawData(data: RestServiceDetails[]): Array<string> {
    const continentsWithDuplicates = data
      .map((country) => country.region)
      .filter((continent) => !!continent);
    return [...new Set(continentsWithDuplicates)]; // destructuring
  }











  private extractCountryNamesFromRawData(rawdataArray: RestServiceDetails[]): string[] {
    return rawdataArray.map(country => country.name);
  }
}
