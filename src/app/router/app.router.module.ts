import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { AppComponent } from '../app.component';
import { AccordionComponent } from '../components/accordion/accordion.component';
import { AlertComponent } from '../components/alert/alert.component';
import { HerosComponent } from '../components/heros/heros.component';
import { LoginComponent } from '../components/login/login.component';
import { ToasterComponent } from '../components/toaster/toaster.component';
import { GuardService } from '../guard/auth.guard.service';
import { HomeComponent } from '../components/toaster/home/home.component';
import { ProductComponent } from '../components/product/product.component';
import { AddEditComponent } from '../components/product/add-edit/add-edit.component';

const routers = [
	{ path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [GuardService] },
	{ path: 'home', component: AccordionComponent, pathMatch: 'full', canActivate: [GuardService] },
	{ path: 'alert', component: AlertComponent, canActivate: [GuardService] },
	{ path: 'hero', component: HerosComponent, canActivate: [GuardService] },
	// { path: 'home', component: AccordionComponent},
	// { path: 'alert', component: AlertComponent},
	// { path: 'hero', component: HerosComponent },
	{
		path: 'Toaster', component: ToasterComponent,
		children: [
			{ path: '', redirectTo: 'homeX', pathMatch: 'full' },
			{ path: 'homeX', component: HomeComponent }
		]

	},
	{
		path: 'Product', component: ProductComponent,
		children: [
			{ path: 'add', component: AddEditComponent },
			{ path: 'edit', component: AddEditComponent }
		]
	},
	{ path: 'login', component: LoginComponent },
	{ path: 'lazy', loadChildren: '../components/lazy/lazyModule#LazyModule' },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routers)
	],
	exports: [
		RouterModule
	]
})
export class AppRouterModule { }

