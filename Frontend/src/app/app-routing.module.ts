import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';

const routes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'rent-property', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent},
  {path: 'property-details/:id', component: PropertyDetailComponent},
  {path: 'user/register', component: UserRegistrationComponent},
  {path: 'user/login', component: UserLoginComponent},
  // creating a page not found route
  {path: '**', component: PropertyListComponent}
];

export const property_routes = [
  provideRoutes(routes)
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
