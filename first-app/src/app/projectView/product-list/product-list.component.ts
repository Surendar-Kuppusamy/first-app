import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { AjaxService } from '../../services/ajax/ajax.service';


@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

	public productListLoader;
	public products;
	public productTypes;
	public results;

	constructor(private fb: FormBuilder, private ajax: AjaxService, private toastr: ToastrService, private router: Router, private locker: Locker) { }

	ngOnInit(): void {
		if(!this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.router.navigate(['login']);
		}
		this.getProducts();
	}

	getProducts() {
		this.productListLoader=true;
		this.ajax.get(environment.getAjaxUrl, 'param=getProducts').subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				console.log(this.results);
				this.products=this.results.products;
			} else {
				this.toastr.error(this.results.message);
			}
		});
	}


}
