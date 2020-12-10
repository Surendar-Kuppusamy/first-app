import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {LockerModule, Locker, DRIVERS} from 'angular-safeguard';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth/auth.service';
import { AjaxService } from '../../services/ajax/ajax.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public results;

  constructor(public route: ActivatedRoute, public router: Router, public ajax: AjaxService, public toastr: ToastrService, public locker: Locker, public authService: AuthService) {}

  	ngOnInit(): void {
		this.logout();
  	}

  	logout() {
		this.ajax.get(environment.getAjaxUrl, 'param=logout').subscribe((res)=>{ 
			this.results = res;
			console.log(this.results);
			if(this.results['status'] == 'success') {
				this.toastr.success(this.results.message);
				this.locker.remove(DRIVERS.COOKIE, 'token');
				if(this.locker.has(DRIVERS.COOKIE, 'session')) {
					this.locker.remove(DRIVERS.COOKIE, 'session');
					this.authService.emitLogout('logout');
				}
				this.authService.navChange('change');
				this.router.navigate(['login']);
			} else {
				this.toastr.error(this.results.message);
			}
		});
	}

}
