import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from './services/ajax/ajax.service';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { environment } from '../environments/environment';
import { LoginComponent } from './loginView/login/login.component';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	public results;
	public isCollapsed=true;
	public title = 'first-app';
	public nav = false;
	  
  	constructor(private route: ActivatedRoute, private ajax: AjaxService, private toastr: ToastrService, private router: Router, private locker: Locker, private authService: AuthService) {
		authService.navChangeEventEmit$.subscribe(value => {
			this.checkNav();
		});
	}
  	
	ngOnInit() {
		if(this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.nav = true;
		} else {
			this.nav = false;
		}
	}

	checkNav() {
		if(this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.nav = true;
		} else {
			this.nav = false;
		}
	}
}
