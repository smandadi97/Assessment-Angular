import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { ProddetailsComponent } from './proddetails/proddetails.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    ProddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
