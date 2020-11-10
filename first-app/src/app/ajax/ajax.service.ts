import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Response } from './response';
import {LockerModule, Locker, DRIVERS} from 'angular-safeguard';



@Injectable({
	providedIn: 'root'
})
export class AjaxService {

	constructor(private http: HttpClient, private locker: Locker) { }

	private handleError(error: HttpErrorResponse) {
		if(error.error instanceof ErrorEvent) {
			console.log(error.error.message);
		} else {
			console.log(error.status);
			console.log(error.error);
		}
	}

	get(url, parameters) {
		let token = '';
		let httpGetOptions;
		if (this.locker.has(DRIVERS.COOKIE, 'token')) {
			token = this.locker.get(DRIVERS.COOKIE, 'token');
		}
		if(parameters != '') {
			httpGetOptions = {
				headers: new HttpHeaders({'Content-Type' : 'application/json', 'X-CSRF-TOKEN' : token, 'X-Requested-With' : 'XMLHttpRequest'}),
				params: new HttpParams({fromString: parameters})
			};
		} else {
			httpGetOptions = {
				headers: new HttpHeaders({'Content-Type' : 'application/json', 'X-CSRF-TOKEN' : token, 'X-Requested-With' : 'XMLHttpRequest'})
			};
		}
		
		return this.http.get(url, httpGetOptions);
	}

	post(url, data) {
		let token = '';
		if(localStorage.hasOwnProperty('token')) {
			token = localStorage.getItem('token');
		}
		const httpPostOptions = {
			headers: new HttpHeaders({'Content-Type' : 'application/json', 'X-CSRF-TOKEN' : token, 'X-Requested-With' : 'XMLHttpRequest'}),
			observe: "body",
			responseType: "json"
		};
		return this.http.post(url, data, {observe: "body", responseType: "json"});
	}
}