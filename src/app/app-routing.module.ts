import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProddetailsComponent } from './proddetails/proddetails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'; //How do modules work? ClientModules, NgModule
const routes: Routes = [
{path: '', component: HomepageComponent},
{path: 'search/:searchword', component:HomepageComponent},
{path: 'product/:id', component: ProddetailsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
