import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AjaxService } from '../ajax/ajax.service'

@Injectable({
	providedIn: 'root'
})
export class AuthService implements CanActivate {

	public results;

	constructor(private _router:Router, private ajax: AjaxService) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

		let res: any;
		/* const url = 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php';
		this.ajax.get(url, 'checkRequest').subscribe(res => {
			this.results = res;
			if(this.results['status'] == 'error') {
				return false;
			}
		}); */
		return true;
	}
}
