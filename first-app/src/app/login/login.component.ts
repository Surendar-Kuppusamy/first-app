import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { faPencilAlt, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AjaxService } from '../ajax/ajax.service';
import { Response } from '../ajax/response';
import { AuthService } from '../auth/auth.service';



@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	@ViewChild('login_mfa_modal') modalId;
	private subscription: Subscription;
	private results;
	private token;
	public cookieCard;
	public handletoken;
	public loginLoader = false;
	public faGooglePlusG=faGooglePlusG;
	public faPlus=faPlus;
	user: SocialUser;

	constructor(private ajax:AjaxService, private toastr: ToastrService, private recaptchaV3Service: ReCaptchaV3Service, private router: Router, private locker: Locker, private authService: SocialAuthService, private authMyService: AuthService, private modalService: NgbModal) {
		this.subscription = authMyService.logoutEventEmit$.subscribe(action => {
			let act = action;
			if(act == 'logout') {
				this.signOut();
			}
		});
	}

	signInWithGoogle() {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}

	signOut() {
		this.authService.signOut();
	}

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});

	mfaCode = new FormControl('');

	ngOnInit(): void {
		this.cookieCard=true;
		if (this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.router.navigate(['users']);
		}
		this.authService.authState.subscribe((user) => {
			this.user = user;
			console.log(this.user);
			this.loginWithGoogle();
		});
	}

	hideCard() {
		this.cookieCard=false;
	}

	setCookie() {
		const cookie_url = 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php';
		this.ajax.get(cookie_url, 'param=setCookie').subscribe(res => this.results = res);
		this.hideCard();
	}


	login() {
		let res: any;
		const url = 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php';
		const data = {
				command: 'login',
				form_value: this.loginForm.value,
				token: this.handletoken
		};
		this.ajax.post(url, data).subscribe(
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
						this.router.navigate(['users']);
						window.location.reload();
					}
				}
				this.loginLoader = false;
			}
		);
	}

	loginWithMFA() {
		let res: any;
		const url = 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php';
		const data = {
				command: 'loginWithMFA',
				form_value: this.loginForm.value,
				mfa_code: this.mfaCode.value
		};
		this.ajax.post(url, data).subscribe(res => {
			this.results = res;
			if(this.results.status == 'error') {
				this.toastr.error(this.results.message);
			} else {
				this.modalService.dismissAll();
				this.toastr.success(this.results.message);
				this.locker.set(DRIVERS.COOKIE, 'token', this.token);
				this.token = '';
				this.router.navigate(['users']);
				window.location.reload();
			}
		});
	}

	loginWithGoogle() {
		this.loginLoader = true;
		let res: any;
		const url = 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php';
		console.log()
		const data = {
				command: 'loginWithGoogle',
				google_token: this.user.idToken
		};
		this.ajax.post(url, data).subscribe(
			(res) => {
				this.results = res;
				if(this.results.status == 'error') {
					this.toastr.error(this.results.message);
				} else {
					this.toastr.success(this.results.message);
					this.locker.set(DRIVERS.COOKIE, 'token', this.results.token);
					//this.locker.set(DRIVERS.COOKIE, 'session', 'google');
					this.router.navigate(['users']);
					window.location.reload();
				}
				this.loginLoader = false;
			}
		);
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