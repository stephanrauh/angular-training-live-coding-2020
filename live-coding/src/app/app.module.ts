import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OverviewComponent } from './overview/overview.component';
import { CountryComponent } from './country/country.component';
import { PauseComponent } from './pause/pause.component';
import { ContinentTileComponent } from './continent-tile/continent-tile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ArbeitnehmernummerPipe } from './pipes/arbeitnehmernummer.pipe';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';
import { AppRoutingModule } from './app-routing.module';
import { SixItemsPipe } from './pipes/six-items.pipe';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginComponent } from './login/login.component';
import { CountryService } from './services/country.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // support for template driven forms
    ReactiveFormsModule, // support for reactive forms
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    OverviewComponent,
    CountryComponent,
    PauseComponent,
    ContinentTileComponent,
    ArbeitnehmernummerPipe,
    SixItemsPipe,
    ErrorComponent,
    EditComponent,
    CountryListComponent,
    LoginComponent,
  ],
  providers: [CountryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
