import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';

import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angularx-social-login";

import { AjaxService } from '../../services/ajax/ajax.service';
import { AuthService } from '../../services/auth/auth.service';
import { environment  } from '../.././../environments/environment';


@Component({
  selector: 'app-login-with-google',
  templateUrl: './login-with-google.component.html',
  styleUrls: ['./login-with-google.component.css']
})
export class LoginWithGoogleComponent implements OnInit {

  	public loginLoader;
  	public subscription: Subscription;
 	public results;
  	user: SocialUser;
	loggedIn: boolean;

  constructor(private locker: Locker, private router: Router, private ajax: AjaxService, public toastr: ToastrService, private socialAuthService: SocialAuthService, public authService: AuthService) {}

  ngOnInit(): void {
	//this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
		this.user = user;
		this.loggedIn = (user != null);
		console.log(this.user);
      	if(this.user!=null) {
        	this.loginWithGoogle();
      	}
	});
  }

	loginWithGoogle() {
		this.loginLoader = true;
		let res: any;
		const data = {
			command: 'loginWithGoogle',
			google_token: this.user.idToken
		};
		this.ajax.post(environment.signupAjaxUrl, data).subscribe( (res) => {
			this.results = res;
			if(this.results.status == 'error') {
				this.toastr.error(this.results.message);
				this.router.navigate(['login']);
			} else {
				console.log(this.results.message)
				this.toastr.success(this.results.message);
				this.locker.set(DRIVERS.COOKIE, 'token', this.results.token);
				this.locker.set(DRIVERS.COOKIE, 'session', 'google');
				this.authService.navChange('change');
				this.router.navigate(['users']);
			}
			this.loginLoader = false;
		});
	}

}
