import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {LockerModule, Locker, DRIVERS} from 'angular-safeguard';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { AjaxService } from '../ajax/ajax.service'



@Injectable({
	providedIn: 'root'
})
export class AuthService implements CanActivate {

	public results;
	public status:Boolean;
	
	private logoutEvent = new Subject<string>();
	logoutEventEmit$ = this.logoutEvent.asObservable();

	private navChangeEvent = new Subject<string>();
	navChangeEventEmit$ = this.navChangeEvent.asObservable();

	constructor(private _router:Router, private ajax: AjaxService, private locker: Locker, public toastrService: ToastrService) {}
	public promise = new Promise((resolve, reject) => {
		this.ajax.get(environment.getAjaxUrl, 'param=checkRequest').subscribe(res => {
			this.results = res;
			if(this.results['status'] == 'error') {
				this._router.navigate(['login']);
				resolve(false);
			} else {
				resolve(true);
			}
		});
		
	});

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
		return true;
		/* let action = this.promise.then((value) => value).catch((error) => { throw new Error('Something went wrong');});
		console.log(action);
		return action; */
	}

	emitLogout(action: string) {
		this.logoutEvent.next(action);
	}

	navChange(evt: string) {
		this.navChangeEvent.next(evt);
	}
}
