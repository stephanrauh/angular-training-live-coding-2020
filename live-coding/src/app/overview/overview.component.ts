import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService, CountryHashtable } from '../services/country.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {

  public countriesByContinent: CountryHashtable = {};

  constructor(public countryService: CountryService, private router: Router) {}

  ngOnInit() {
    this.countryService.countriesByContinent.subscribe(hashmap => this.countriesByContinent = hashmap);
  }

  public createCountry(): void {
    this.router.navigateByUrl('edit-country/new');
  }

  public deleteCountry(): void {
    alert('I\'m afraid that\'s not so easy. You\'d rather ask the inhabitants of the country first.');
  }
}
