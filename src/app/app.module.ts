import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from "@angular/forms"
import { Ng2CompleterModule } from "ng2-completer";
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    // HttpClient,
    Ng2CompleterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
