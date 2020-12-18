import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public countryService: CountryService,
    private router: Router) {
   }

  ngOnInit() {
  }

  public neuesLandAnlegen(): void {
    this.router.navigateByUrl("edit-country");
  }

  public landLoeschen(): void {
    alert("Nein, das geht leider nicht.");
  }

}
