import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {
  public continent!: string;

  private _countries = new Subject<Array<string>>();

  public countries = this._countries as Observable<Array<string>>;

  constructor(
    private urlService: ActivatedRoute,
    public countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.urlService.params.subscribe((params: Params) => {
      this.continent = params['continent'];
      if (this.continent) {
        this.countryService.countriesByContinent.subscribe((hashmap) => {
          this._countries.next(hashmap[this.continent]);
        });
      }
    });
  }
}
