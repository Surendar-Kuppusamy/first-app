import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginView/login/login.component';
import { PagenotfoundComponent } from './loginView/pagenotfound/pagenotfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './projectView/users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './loginView/signup/signup.component';
import { ProductAddComponent } from './projectView/product-add/product-add.component';
import { ProductListComponent } from './projectView/product-list/product-list.component';
import { TaxesComponent } from './projectView/taxes/taxes.component';
import { LogoutComponent } from './loginView/logout/logout.component';
import { LoginWithGoogleComponent } from './loginView/login-with-google/login-with-google.component';


const lockerConfig = {
	driverNamespace: 'krsa',
	driverFallback: [DRIVERS.LOCAL, DRIVERS.SESSION, DRIVERS.COOKIE],
	namespaceSeperator: '-'
}
const googleLoginOptions = {
	scope: 'profile email',
	//ux_mode: 'redirect',
	//redirect_uri: 'http://localhost/Server/Angular10/Class/ajax/GoogleSign.php'
};


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		PagenotfoundComponent,
		UsersComponent,
		SignupComponent,
		ProductAddComponent,
		ProductListComponent,
		TaxesComponent,
		LogoutComponent,
		LoginWithGoogleComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		NgbCollapseModule,
		ToastrModule.forRoot({
			timeOut: 10000,
			positionClass: 'toast-top-center',
			preventDuplicates: true,
		}),
		RecaptchaV3Module,
		LockerModule,
		FontAwesomeModule,
		AngularFileUploaderModule,
		NgbModule,
		NgSelectModule,
		LockerModule.withConfig(lockerConfig),
		SocialLoginModule
	],
	providers: [
		{ provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Lc8_tkZAAAAALeKPQpA-XmwDUJEYRrBfxu5HHck' },
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
			  autoLogin: false,
			  providers: [
				{
				  id: GoogleLoginProvider.PROVIDER_ID,
				  provider: new GoogleLoginProvider(
					'1040864376459-915ppinugtml87rq9i5o0hohirrjknhq.apps.googleusercontent.com',
					googleLoginOptions
				  )
				},
				{
				  id: FacebookLoginProvider.PROVIDER_ID,
				  provider: new FacebookLoginProvider('734583643847772')
				}
			  ]
			} as SocialAuthServiceConfig,
		  }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
