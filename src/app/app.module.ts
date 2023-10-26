import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { authInterceptorProvider } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    TourModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UserModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
