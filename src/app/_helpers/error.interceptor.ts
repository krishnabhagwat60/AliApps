import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthenticationService } from '../_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            map(el => {
                let _resp = el as HttpResponse<any>;
                
                // console.log(_resp.body);
                if(_resp.body != undefined && _resp.body.statusInfo != undefined && _resp.body.statusInfo.statusCode != undefined)
                {
                    if(_resp.body.statusInfo.statusCode == 5){
                        
                        console.log('-1-1-1 logout user');
                        console.log(_resp.body);
                        this.authenticationService.logout();
                        localStorage.setItem('sessionOutMessage', 'You are logged in another place.');
                        location.reload(true);
                            
                    }
                }
             
                return el;
            }),
            catchError(err => {
                // console.log(err);

                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    this.authenticationService.logout();
                    location.reload(true);
                }

                const error = err.error.message || err.statusText;
                return throwError(error);
            }))
    }
}