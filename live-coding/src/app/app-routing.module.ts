import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';
import { CountryListComponent } from './country-list/country-list.component';
import { LoginGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'start', component: OverviewComponent },
  { path: 'edit-country/:country', component: EditComponent, canActivate: [LoginGuard] },
  { path: 'country-list/:continent', component: CountryListComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];



@NgModule(
{
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)
export class AppRoutingModule {}
