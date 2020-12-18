import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { OverviewComponent } from './overview/overview.component';
import { CountryComponent } from './country/country.component';
import { PauseComponent } from './pause/pause.component';
import { ContinentTileComponent } from './continent-tile/continent-tile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ArbeitnehmernummerPipe } from './arbeitnehmernummer.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, HttpClientModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    MenuComponent,
    OverviewComponent,
    CountryComponent, PauseComponent, ContinentTileComponent, ArbeitnehmernummerPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
