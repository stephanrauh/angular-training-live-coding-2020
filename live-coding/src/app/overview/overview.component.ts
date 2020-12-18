import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public countryService: CountryService) {
   }

  ngOnInit() {
  }

}
