import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './users/users.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		PagenotfoundComponent,
		UsersComponent
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
				  provider: new GoogleLoginProvider('1040864376459-915ppinugtml87rq9i5o0hohirrjknhq.apps.googleusercontent.com')
				}/* ,
				{
				  id: FacebookLoginProvider.PROVIDER_ID,
				  provider: new FacebookLoginProvider('clientId')
				} */
			  ]
			} as SocialAuthServiceConfig,
		  }
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
