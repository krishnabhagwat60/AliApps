import { Component, OnInit, AfterViewInit, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { BsModalService } from 'ngx-bootstrap/modal';


@Component({ templateUrl: 'login.component.html', styleUrls: ['login.component.css'] })
export class LoginComponent implements OnInit, AfterViewInit {
    @ViewChild('template') template: ElementRef;
    modalRef: BsModalRef;
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';
    sessionTimeOut: boolean;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        public modalService: BsModalService
    ) {

        if (localStorage.getItem('currentUser')) {
            this.router.navigate(['/dashboard']);
        }
        this.sessionTimeOut = false;
    }

    ngOnInit() {

        this.loginForm = this.formBuilder.group({
            emailaddress: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authenticationService.logout();
        if (localStorage.getItem('sessionOutMessage')) {
            this.sessionTimeOut = true;
            localStorage.removeItem('sessionOutMessage');
        }
        // get return url from route parameters or default to '/'
        // this.returnUrl = '/consultant_admin9007/#/dashboard';
        // this.returnUrl = '/consultant_admin/#/dashboard';
        this.returnUrl = '/#/dashboard';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.emailaddress.value, this.f.password.value)
            .pipe(first())
            .subscribe(

                data => {
                    if (data.statusInfo.statusCode == 22) {
                        // this.router.navigate([this.returnUrl]);
                        window.location.href = this.returnUrl;
                    } else {
                        if (data.statusInfo.message) {
                            this.error = data.statusInfo.message;
                        } else {
                            this.error = 'An Error Occured'
                        }

                        this.loading = false;
                    }

                },
                error => {
                    this.error = 'An Error Occured'

                    this.loading = false;
                });
    }

    ngAfterViewInit() {
        const user = {
            id: 10
        };
        if (this.sessionTimeOut == true) {
            this.modalRef = this.modalService.show(this.template, {
                initialState: user
            });
        }
    }
}
