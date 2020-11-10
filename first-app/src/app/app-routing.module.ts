import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UsersComponent } from './users/users.component';
import { AuthService } from './auth/auth.service';

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
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthService]
  },
  {
    path: 'users/:id',
    component: UsersComponent,
    canActivate: [AuthService]
  },
  {
    path: 'page',
    component: PagenotfoundComponent,
    canActivate: [AuthService]
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
