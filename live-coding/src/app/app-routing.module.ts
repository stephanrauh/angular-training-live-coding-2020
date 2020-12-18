import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OverviewComponent } from './overview/overview.component';
import { ErrorComponent } from './error/error.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'start', component: OverviewComponent },
  { path: 'edit-country', component: EditComponent },
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
