import { Component, VERSION, OnInit } from '@angular/core';
import { countries } from "./services/countries-service-mockup";
import { CountryDetails } from "./services/country-details";
import { CountryService } from './services/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  // public continents!: Observable<Array<string>>;

  constructor(public countryService: CountryService) {
    // this.continents = this.countryService.continents;
  }

  ngOnInit(): void {
  }

  public test(): void {
  }

}
