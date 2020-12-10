import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { LoginComponent } from './loginView/login/login.component';
import { PagenotfoundComponent } from './loginView/pagenotfound/pagenotfound.component';
import { UsersComponent } from './projectView/users/users.component';
import { SignupComponent } from './loginView/signup/signup.component';
import { ProductAddComponent } from './projectView/product-add/product-add.component'
import { ProductListComponent } from './projectView/product-list/product-list.component';
import { AuthService } from './services/auth/auth.service';
import { LogoutComponent } from './loginView/logout/logout.component';
import { LoginWithGoogleComponent } from './loginView/login-with-google/login-with-google.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'loginwithgoogle',
    component: LoginWithGoogleComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UsersComponent
  },
  {
    path: 'product/add',
    component: ProductAddComponent
  },
  {
    path: 'product/:id',
    component: ProductAddComponent
  },
  {
    path: 'products',
    component: ProductListComponent,
    /* canActivate: [AuthService] */
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'page',
    component: PagenotfoundComponent
  },
  {
    path: '404',
   component: PagenotfoundComponent
  },
  {
    path: '**',
   component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "ignore"})],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/support' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
})
export class AppRoutingModule { }
