import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AjaxService } from '../../services/ajax/ajax.service';
import { FormBuilder } from '@angular/forms';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	public sinupLoader=false;
	public results;

	constructor(private fb:FormBuilder, private ajax: AjaxService, private toastr: ToastrService) { }

	signupForm = this.fb.group({
		userName: [''],
		userEmail: [''],
		userPassword: ['']
	});

	ngOnInit(): void {
	}

	showPassword(passwordInput) {
		passwordInput.type = (passwordInput.type == 'password') ? 'text' : 'password';
	}

	signup() {
		console.log(this.signupForm.value);
		const url = 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php';
		const params = {
			command: 'signup',
			id: 0,
			signupValue: this.signupForm.value
		};
		this.ajax.post(url, params).subscribe(res => {
			this.results = res;
			if(this.results.status == 'success') {
				this.toastr.success(this.results.message);
				this.signupForm.reset();
			} else {
				this.toastr.error(this.results.message);
			}
		});
	}

}
