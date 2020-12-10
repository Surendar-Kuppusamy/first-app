import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { Subscription } from 'rxjs';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';

import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from "angularx-social-login";

import { faPencilAlt, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment  } from '../.././../environments/environment';
import { AjaxService } from '../../services/ajax/ajax.service';
import { AuthService } from '../../services/auth/auth.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@ViewChild('login_mfa_modal') modalId;
	private results;
	private token;
  	private subscription: Subscription;
	public cookieCard;
	public handletoken;
	public loginLoader = false;
	public faGooglePlusG=faGooglePlusG;
	public faPlus=faPlus;

	user: SocialUser;
	loggedIn: boolean;
	
	constructor(private ajax:AjaxService, private toastr: ToastrService, private recaptchaV3Service: ReCaptchaV3Service, private router: Router, private locker: Locker, private authService: AuthService, private modalService: NgbModal, private socialAuthService: SocialAuthService) {
		this.subscription = this.authService.logoutEventEmit$.subscribe(action => {
			let act = action;
			if(act == 'logout') {
				this.signOut();
			}
		});
	}

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});

	mfaCode = new FormControl('');

	ngOnInit(): void {
		this.cookieCard=true;
		if(this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.authService.navChange('change');
			this.router.navigate(['users']);
		}
	}

	signInWithGoogle(): void {
		this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
		this.router.navigate(['loginwithgoogle']);
	}

	signOut(): void {
		this.socialAuthService.signOut();
	}


	hideCard() {
		this.cookieCard=false;
	}

	setCookie() {
		this.ajax.get(environment.getAjaxUrl, 'param=setCookie').subscribe(res => this.results = res);
		this.hideCard();
	}

	login() {
		let res: any;
		const data = {
				command: 'login',
				form_value: this.loginForm.value,
				token: this.handletoken
		};
		this.ajax.post(environment.signupAjaxUrl, data).subscribe(
			(res) => {
				this.results = res;
				console.log(this.results);
				if(this.results.status == 'error') {
					this.toastr.error(this.results.message);
				} else {
					if(this.results.mfa_status == 1 ) {
						this.modalService.open(this.modalId);
						this.token = this.results.token;
					} else {
						this.toastr.success(this.results.message);
						this.locker.set(DRIVERS.COOKIE, 'token', this.results.token);
						this.locker.set(DRIVERS.COOKIE, 'user_id', this.results.user_id);
						this.authService.navChange('change');
						this.router.navigate(['users']);
					}
				}
				this.loginLoader = false;
			}
		);
	}

	loginWithMFA() {
		let res: any;
		const data = {
				command: 'loginWithMFA',
				form_value: this.loginForm.value,
				mfa_code: this.mfaCode.value
		};
		this.ajax.post(environment.signupAjaxUrl, data).subscribe(res => {
			this.results = res;
			if(this.results.status == 'error') {
				this.toastr.error(this.results.message);
			} else {
				this.modalService.dismissAll();
				this.toastr.success(this.results.message);
				this.locker.set(DRIVERS.COOKIE, 'token', this.token);
				this.token = '';
				this.authService.navChange('change');
				this.router.navigate(['users']);
			}
		});
	}
	
	executeImportantAction() {
		this.loginLoader = true;
		this.recaptchaV3Service.execute('login')
		  .subscribe((token) => {
			this.handletoken = token;
			this.login();
		  });
	}

}