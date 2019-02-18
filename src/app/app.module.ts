import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { WeAreCloseComponent } from './we-are-close/we-are-close.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { Slider2Component } from './slider2/slider2.component';
import { HeaderComponent } from './header/header.component';
import { Slider1Component } from './slider1/slider1.component';
import { ConsoApiService } from './conso-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    WeAreCloseComponent,
    HowItWorkComponent,
    Slider2Component,
    HeaderComponent,
    Slider1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ConsoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
