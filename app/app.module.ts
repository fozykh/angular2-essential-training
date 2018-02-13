import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Contains Pipes, Directives ... for working with the DOM. 

import {AppComponent} from './app.component';

@NgModule ({
  imports: [
    BrowserModule,
  ], // Other modules that your module will need
  declarations: [
    AppComponent
  ], // Used to make components, directives and pipes that are not from another module (from a components for example) available to your module
  bootstrap: [
    AppComponent
  ], // Used in the root module and will let Angular know which component will is the root component for the app bootstrap.
  // bootstrap is the entry point for the app code.
})
export class AppModule {
  
}