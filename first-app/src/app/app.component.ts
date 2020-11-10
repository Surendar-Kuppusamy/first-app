import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from './ajax/ajax.service';
import {LockerModule, Locker, DRIVERS} from 'angular-safeguard';
import { SocialAuthService } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public results;
  public isCollapsed=true;

  constructor(private route: ActivatedRoute, private ajax: AjaxService, private toastr: ToastrService, private router: Router, private locker: Locker, private authService: SocialAuthService) {}
  title = 'first-app';
  nav = false;

  ngOnInit() {

	if (this.locker.has(DRIVERS.COOKIE, 'token')) {
		this.nav = true;
		console.log(this.nav);
	} else {
		this.nav = false;
		console.log(this.nav);
	}
  }

  logout() {
	const url = 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php';
	this.ajax.get(url, 'param=logout').subscribe((res)=>{ 
		this.results = res;
	  if(this.results['status'] == 'success') {
		/* if (this.locker.has(DRIVERS.COOKIE, 'session')) {
			this.locker.remove(DRIVERS.COOKIE, 'session');
			this.authService.signOut();
		} */
		this.toastr.success(this.results.message);
		this.locker.remove(DRIVERS.COOKIE, 'token');
		this.router.navigate(['login']);
		window.location.reload();
	  } else {
		this.toastr.error(this.results.message);
	  }
	});
  }
}
