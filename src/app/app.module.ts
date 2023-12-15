import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { TourModule } from './tour/tour.module';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';

import { AuthInterceptorProvider } from './auth.interceptor';
import { AuthenticatingComponent } from './authenticating/authenticating.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatingComponent,
  ],
  imports: [
    AuthModule,
    TourModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule
  ],
  providers: [
    AuthInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
