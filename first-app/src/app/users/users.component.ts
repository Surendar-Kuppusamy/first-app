import { Component, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { LockerModule, Locker, DRIVERS } from 'angular-safeguard';
import { AjaxService } from '../ajax/ajax.service';
import { ToastrService } from 'ngx-toastr';
import { AngularFileUploaderConfig } from 'angular-file-uploader';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

	constructor(private router: Router, private locker: Locker, private ajaxService: AjaxService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService) {}

	public usersLoader=false;
	public users;
	public userslist;
	public userid;
	public results;
	public check_user_id;
	public avatar;
	public faPencilAlt=faPencilAlt;
	public faTimes=faTimes;

	public id=this.activatedRoute.snapshot.paramMap.get('id');

	afuConfig: AngularFileUploaderConfig = {
		theme: 'attachPin',
		hideProgressBar: true,
		hideResetBtn: true,
		maxSize: 1,
		uploadAPI: {
			url: 'http://localhost/Server/Angular10/Class/ajax/UploadAjax.php',
			method:"POST",
			headers: {
				/* "Content-Type" : "text/plain;charset=UTF-8", */
				"Authorization" : "Bearer" + this.locker.get(DRIVERS.COOKIE, 'token')
			},
			params: {
				'params': 'user_avatar',
				'id': this.id
			},
			responseType: 'json'
		},
		formatsAllowed: '.jpg,.png',
		multiple: false,
		replaceTexts: {
			selectFileBtn: 'Select Files',
			resetBtn: 'Reset',
			uploadBtn: 'Upload',
			dragNDropBox: 'Drag N Drop',
			attachPinBtn: 'Upload Image',
			afterUploadMsg_success: 'Successfully Uploaded !',
			afterUploadMsg_error: 'Upload Failed !'
		}
	  };
	

	usersForm = new FormGroup({
		name : new FormControl(''),
		email : new FormControl(''),
		type : new FormControl('')
	});

	

	ngOnInit(): void {
		if (!this.locker.has(DRIVERS.COOKIE, 'token')) {
			this.router.navigate(['login']);
		}

		this.userid=this.activatedRoute.snapshot.paramMap.get('id');
		console.log(this.userid);
		
		if(this.userid == null) {
			this.getUsers();
		} else {
			const userid_url = 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php';
			let user_id_param = 'param=checkUserId&user_id='+this.userid;
			this.ajaxService.get(userid_url, user_id_param).subscribe(res => {
				this.check_user_id = res;
				console.log(this.check_user_id);
				if(this.check_user_id.status == 'success') {
					if(this.check_user_id.data == 1) {
						this.editUser(this.userid);
					} else {
						this.toastrService.error('Invalid User.');
						this.router.navigate(['users']);
					}
				} else {
					this.toastrService.error('Something went wrong.');
					this.router.navigate(['users']);
				}
			});
			
		}
		
	}
	getUsers() {
		this.usersLoader=true;
		const users_url = 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php';
		this.ajaxService.get(users_url, 'param=getUsers').subscribe(res => {
			this.users = res;
			this.userslist= this.users.data;
			this.usersLoader=false;
			
		});
		this.usersLoader=false;
	}

	editUser(id) {
		this.usersLoader=true;
		const edit_url = 'http://localhost/Server/Angular10/Class/ajax/ProjectAjax.php';
		const data = {
			command: 'edituser',
			id: id
		};
		this.ajaxService.post(edit_url, data).subscribe(res => {
			this.users = res;
			this.userslist= this.users.data;
			this.usersLoader=false;
			console.log(res);
			this.usersForm.patchValue({
				name: this.users.data.name,
				email: this.users.data.email,
				type: this.users.data.type,
			});
			if(this.users.data.avatar=='') {
				this.avatar='../../assets/images/nature1.jpg';
			} else {
				this.avatar='data:image/'+this.users.data.avatar_extension+';base64,'+this.users.data.avatar;
			}
		});
		this.usersLoader=false;
	}

	modifyUser() {
		this.usersLoader=true;
		const edit_url = 'http://localhost/Server/Angular10/Class/ajax/ProjectAjax.php';
		const data = {
			command: 'modifyUser',
			id: this.userid,
			data: this.usersForm.value
		};
		this.ajaxService.post(edit_url, data).subscribe(res => {
			this.results = res;
			console.log(this.results);
			if(this.results.status == 'success') {
				this.toastrService.success(this.results.message);
				this.router.navigate(['users']);
			} else {
				this.toastrService.error(this.results.message);
			}
			this.usersLoader=false;
		});
	}

	editSingleUser(id) {
		console.log(id);
		let dy_url = "users/"+id;
		this.router.navigateByUrl(dy_url);
	}

	uploadResponse(event) {
		console.log(event.body.status);
		if(event.body.status == 'success') {
			this.toastrService.success(event.body.message);
			this.avatar=event.body.image;
		} else {
			this.toastrService.error(event.body.message);
		}
	}

	removeUserAvatar() {
		this.usersLoader=true;
		const remove_url = 'http://localhost/Server/Angular10/Class/ajax/ProjectAjax.php';
		const data = {
			command: 'removeUserAvatar',
			id: this.userid,
		};
		this.ajaxService.post(remove_url, data).subscribe(res => {
			this.results = res;
			if(this.results.status == 'success') {
				this.toastrService.success(this.results.message);
				this.avatar='../../assets/images/nature1.jpg';
			} else {
				this.toastrService.error(this.results.message);
			}
			this.usersLoader=false;
		});		
	}
}
