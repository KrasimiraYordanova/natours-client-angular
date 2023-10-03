import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
import { TourModule } from './tour/tour.module';

import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    TourModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
