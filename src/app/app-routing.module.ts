import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './route/first-page/first-page.component';
import { SecondPageComponent } from './route/second-page/second-page.component';

const routes: Routes = [

	{ path: 'firstpage', component: FirstPageComponent },
	{ path: 'secondpage', component: SecondPageComponent },
	{ path: '', redirectTo: '/firstpage', pathMatch: 'full' },
];

@NgModule( {
	imports: [ RouterModule.forRoot( routes ) ],
	exports: [ RouterModule ]
} )
export class AppRoutingModule { }
