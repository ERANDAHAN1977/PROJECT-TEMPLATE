import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './route/first-page/first-page.component';
import { SecondPageComponent } from './route/second-page/second-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule( {
	declarations: [
		AppComponent,
		FirstPageComponent,
		SecondPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
} )
export class AppModule { }
