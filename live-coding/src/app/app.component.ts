import { Component, VERSION } from "@angular/core";
import { countries } from "./services/countries-service-mockup";
import { CountryDetails } from "./services/country-details";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public smallCountryNames: Array<string>;

  public continents: Array<string>;

  constructor() {
    const countriesWithType = countries as Array<CountryDetails>;


    const continentsWithDuplicates = countriesWithType.map(
      country => country.region
    );
    this.continents = [...new Set(continentsWithDuplicates)]; // destructuring

    this.smallCountryNames = countries
      .filter(country => country.population < 300)
      .map(country => country.name);
  }
}
