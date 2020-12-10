import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { AjaxService } from '../../services/ajax/ajax.service';


@Component({
	selector: 'app-product-add',
	templateUrl: './product-add.component.html',
	styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private ajax: AjaxService, private toastr: ToastrService, private locker: Locker) { }

	private results;
	public product_id;
	public productLoader=false;
	public taxes: FormArray;
	productTypes = [];
	productTax = [];
	productBuyType = [
		{
			label: 'Quantity',
			value: 'QNT'
		},
		{
			label: 'Weight',
			value: 'WGT'
		},
		{
			label: 'Litre',
			value: 'LTR'
		}
	];
	productAddForm=this.fb.group({
		name: [''],
		type: [null],
		detail: [''],
		discountPercentage: [''],
		price: [''],
		buyType: [null],
		buyTypeValue: [''],
		buyTypeUnit: [''],
		taxes: this.fb.array([
			this.fb.group({
				tax: [null],
				value : [''],
				hash:['']
			})
		])
	});
	loading=false;
	public addTagPromise: (name)=>void;
	public addTagTax: (name)=>void;
	ngOnInit(): void {
		if(!this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.router.navigate(['login']);
		}
		this.product_id=this.activatedRoute.snapshot.paramMap.get('id');
		this.getProductTypes();
		this.getProductTaxes();
		this.addTagPromise = (name) => {
			this.addProductType(name);
		};
		this.addTagTax = (name) => {
			this.addProductTax(name);
		};
		if(this.product_id != null) {
			this.getAndSetProduct(this.product_id);
		}
	}

	tax() {
		return <FormArray>this.productAddForm.get('taxes');
	}

	addTax(i) {
		if((this.productAddForm.get('taxes') as FormArray).length > 2) {
			this.toastr.error('Only 3 taxes allowed');
			return;
		} else {
			(this.productAddForm.get('taxes') as FormArray).push(this.fb.group({tax: this.fb.control(null), value: this.fb.control(''), hash: this.fb.control('')}));
		}
	}

	removeTax(i) {
		if((this.productAddForm.get('taxes') as FormArray).length < 2) {
			this.toastr.error('Atleast one taxes required.');
		} else {
			console.log(this.productAddForm.get('taxes').value[i].hash);
			if(this.productAddForm.get('taxes').value[i].hash != '') {
				console.log('edit');
			} else {
				(this.productAddForm.get('taxes') as FormArray).removeAt(i);
			}
		}
	}

	getProductTaxes() {
		this.loading=true;
		this.ajax.get(environment.getAjaxUrl, 'param=getProductTaxes').subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success'){
				if(this.results.data != null) {
					this.productTax=this.results.data;
				}
			} else {
				this.toastr.error(this.results.message);
			}
			this.loading=false;
		});
	}

	getProductTypes() {
		this.loading=true;
		this.ajax.get(environment.getAjaxUrl, 'param=getProductType').subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success'){
				if(this.results.data != null) {
					this.productTypes=this.results.data;
				}
			} else {
				this.toastr.error(this.results.message);
			}
			this.loading=false;
		});
	}
	
	addProductType(type) {
		this.loading=true;
		const params = {
			command: 'addProductType',
			type: type,
			id: this.locker.get(DRIVERS.COOKIE, 'user_id')
		};
		this.ajax.post(environment.productAjaxUrl, params).subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				this.getProductTypes();
				/* this.productAddForm.patchValue({
					buyType: this.results.id
				}); */
			} else {
				this.toastr.error(this.results.message);
			}
		});
		this.loading=false;
	}

	addProduct() {
		this.productLoader=true;
		const params = {
			command: 'addProduct',
			productFormValue: this.productAddForm.value,
			id: this.locker.get(DRIVERS.COOKIE, 'user_id')
		};
		this.ajax.post(environment.productAjaxUrl, params).subscribe(res => {
			this.results = res;
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				this.productAddForm.reset();
			} else {
				this.toastr.error(this.results.message);
			}
			this.productLoader=false;
		});
	}

	addProductTax(tax) {
		this.loading=true;
		const params = {
			command: 'addProductTax',
			tax: tax,
			id: this.locker.get(DRIVERS.COOKIE, 'user_id')
		};
		this.ajax.post(environment.productAjaxUrl, params).subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				this.getProductTaxes();
				/* this.productAddForm.patchValue({
					buyTypeUnit: 'IT'
				}); */
			} else {
				this.toastr.error(this.results.message);
			}
		});
		this.loading=false;
	}

	changeProductBuyType(event) {
		if(this.productAddForm.get('buyType').value == 'QNT') {
			this.productAddForm.patchValue({
				buyTypeUnit: 'IT'
			});
		} else if(this.productAddForm.get('buyType').value == 'WGT') {
			this.productAddForm.patchValue({
				buyTypeUnit: 'KG'
			});
		} else if(this.productAddForm.get('buyType').value == 'LTR'){
			this.productAddForm.patchValue({
				buyTypeUnit: 'LT'
			});
		} else {
			this.productAddForm.patchValue({
				buyTypeUnit: ''
			});
		}
	}
	
	changeUnits(value) {
		this.productAddForm.patchValue({
			buyTypeUnit: value			
		});
	}

	changeTax(event, index) {
		if(event==undefined) {
			return;
		}
		var check=0;
		for(var i=0; i < this.productAddForm.value.taxes.length; i++){
			if(this.productAddForm.value.taxes[i].tax == event.id) {
				check++;
				if(check > 1) {
					this.toastr.error('This tax is already selected.');
					this.tax().setControl(index, this.fb.group({tax: [null], value:['']}));
					break;
				}
			}
		} 
		
	}
	getAndSetProduct(id) {
		this.productLoader=true;
		this.ajax.get(environment.getAjaxUrl, 'param=getProductForEdit&product_id='+this.product_id).subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success'){
				console.log(this.results);
				this.productAddForm.patchValue({
					name: this.results.product.name,
					type: this.results.product.type_id,
					detail: this.results.product.detail,
					discountPercentage: this.results.product.discount_percentage,
					price: this.results.product.actual_price,
					buyType: this.results.product.buy_type,
					buyTypeValue: this.results.product.buy_type_value,
					buyTypeUnit: this.results.product.buy_type_unit
				});
				for(var i=0; i < this.results.product.taxes.length; i++) {
					if(i < 2) {
						this.addTax(i);
					}
					this.tax().setControl(i, this.fb.group({tax: [this.results.product.taxes[i].tax_id], value:[this.results.product.taxes[i].tax_value], hash: [this.results.product.taxes[i].tax_table_id]}));
				}
			} else {
				this.toastr.error(this.results.message);
			}
			this.productLoader=false;
		});		
	}

	updateProduct() {
		this.productLoader=true;
		const params = {
			command: 'updateProduct',
			productFormValue: this.productAddForm.value,
			user_id: this.locker.get(DRIVERS.COOKIE, 'user_id'),
			product_id: this.product_id
		};
		this.ajax.post(environment.productAjaxUrl, params).subscribe(res => {
			this.results = res;
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				this.productAddForm.reset();
			} else {
				this.toastr.error(this.results.message);
			}
			this.productLoader=false;
		});
	}

	onKeyDiscount(event) {
		
	}

}
