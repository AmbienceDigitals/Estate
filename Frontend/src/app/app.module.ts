import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { property_routes } from './app-routing.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './Service/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserLoginComponent } from './User/user-login/user-login.component';


@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserRegistrationComponent,
    UserLoginComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HousingService, property_routes],
  bootstrap: [AppComponent]
})
export class AppModule { }
