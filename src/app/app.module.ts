import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Blog1Component } from './pages/blog/blog1/blog1.component';
import { Blog2Component } from './pages/blog/blog2/blog2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Blog1Component,
    Blog2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
