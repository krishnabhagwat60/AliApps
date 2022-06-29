import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';


import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
    constructor() {
    }

    getUserDetail()
    {
        
        if(localStorage.getItem('currentUser')){
            let userSession:any = JSON.parse(localStorage.getItem('currentUser'));
            return userSession;
        }else{
            return '';
        }
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        req = req.clone({headers: new HttpHeaders({'Content-Type':'application/json','UserId':this.getUserDetail().userId || '','LoginToken':this.getUserDetail().loginToken || '','AppId':'3','LanguageId':'5cb58388dbe4973a7ce65b7d','DeviceId': environment.deviceId})});
        


        
        // if (environment.production)
        // {
        //     if(req.url.startsWith('api')){
        //         const url = environment.baseUrl;
        //         req = req.clone({
        //                url: url + req.url,
        //         });
        //      }
        // }
        
        return next.handle(req);
    }
}
