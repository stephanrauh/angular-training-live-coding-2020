import { RestServiceDetails } from './../rest-service-details';
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { ActivatedRoute } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public country!: RestServiceDetails;

  constructor(private countryService: CountryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => this.laden(param["country"]));
  }

  public laden(country: string): void {
    this.countryService.extractCountryDetails(country)
    .subscribe(data => this.country = data);
  }
  public speichern(): void {
    alert("Das Speichern kommt nächstes Jahr dran.");
  }

}
