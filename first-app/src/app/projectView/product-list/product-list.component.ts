import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl } from '@angular/forms';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { ToastrService } from 'ngx-toastr';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { faPencilAlt, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';
import { AjaxService } from '../../services/ajax/ajax.service';


@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {

	@ViewChild('searchbox') input: ElementRef;

	public productListLoader=false;
	public defaultImage=environment.defaultImage;
	faPencilAlt=faPencilAlt;
	faSearch=faSearch;
	faTimes=faTimes;
	public taxCollapse=0;
	public products;
	public productTypes;
	public results;
	public searchTimeout;
	public productSearch=new FormControl('');

	constructor(private fb: FormBuilder, private ajax: AjaxService, private toastr: ToastrService, private router: Router, private locker: Locker) { }

	

	ngOnInit(): void {
		if(!this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.router.navigate(['login']);
		}
		this.getProducts();
		this.initSearch();
		
	}

	initSearch() {
		setTimeout(() => {
			const searchBox = document.getElementById('searchbox');
			const searchEvent$=fromEvent(searchBox, 'keyup').pipe(
				map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
				debounceTime(10),
				distinctUntilChanged(),
			);
			searchEvent$.subscribe(data => {
				let tempData=data;
				this.productListLoader=true;
				if(tempData.length < 2) {
					tempData='';
				}
				if(this.searchTimeout) {
					clearTimeout(this.searchTimeout);
				}
				this.searchTimeout=setTimeout(() => {
					this.ajax.get(environment.getAjaxUrl, 'param=getProducts&keywords='+tempData).subscribe(prdData => {
						this.results=prdData;
						console.log(this.results);
						if(this.results.status == 'success') {
							this.toastr.success(this.results.message);
							this.products=this.results.products;
						} else {
							this.toastr.error(this.results.message);
						}
					});
				}, 500);
				this.productListLoader=false;
			});
		}, 2000);
	}

	getProducts() {
		this.productListLoader=true;
		this.ajax.get(environment.getAjaxUrl, 'param=getProducts&keywords=').subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				this.products=this.results.products;
			} else {
				this.toastr.error(this.results.message);
			}
			this.productListLoader=false;
		});
	}

	clearSearch() {
		this.productSearch.patchValue('');
		this.getProducts();
		this.initSearch();
	}

	viewTaxes(pid) {
		console.log(pid);
		//this.taxCollapse=(this.taxCollapse == true)? false : true;
		this.taxCollapse=pid;
	}


}
