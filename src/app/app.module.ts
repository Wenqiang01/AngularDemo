import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-menory-data.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert/alert.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AppRouterModule } from './router/app.router.module';
import { HerosComponent } from './components/heros/heros.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/toaster/home/home.component';
import { AlertComponentX } from './components/toaster/alert/alert.component';
import { ToasterComponent } from './components/toaster/toaster.component';
import { ProductComponent } from './components/product/product.component';
import { AddEditComponent } from './components/product/add-edit/add-edit.component';

import { GuardService } from './guard/auth.guard.service';
import { HeroService } from './services/hero.service';
//this is for product section only
import { StaffService } from './components/product/staff.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    AccordionComponent,
    HerosComponent,
    LoginComponent,
    ToasterComponent,
    HomeComponent,
    AlertComponentX,
    ProductComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRouterModule,
    FormsModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [HeroService, GuardService, StaffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
