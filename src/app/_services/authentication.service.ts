import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from './../../environments/environment'
import { User } from '../_models';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
    returnUrl:any;
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public headerDict: {};
    public requestOptions: {};
    constructor(private http: HttpClient, private titleService: Title) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        
        this.headerDict = {
            'Content-Type':'application/json',
            'AppId':'3',
            'UserId': (JSON.parse(localStorage.getItem('currentUser')))?JSON.parse(localStorage.getItem('currentUser')).userId:'',
            'LoginToken': (JSON.parse(localStorage.getItem('currentUser')))?JSON.parse(localStorage.getItem('currentUser')).loginToken:'',
            'LanguageId':environment.englishLanguageId,
            'DeviceId': environment.deviceId            
          };
          
        this.requestOptions = {                                                                                                                                                   
            headers: new HttpHeaders(this.headerDict), 
          };
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    

    login(emailaddress: string, password: string) {
        return this.http.post<any>(environment.httpBaseUrl+`ManageAccount/Login`, { emailaddress, password }, this.requestOptions)
            .pipe(map(user => {
               // console.log(user+' app con');
                // login successful if there's a jwt token in the response
                console.log(user.data);
                if (user && user.data.loginToken) {
                    console.log( user.data+ 'loggined');
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.removeItem('currentUser');
                    localStorage.setItem('currentUser', JSON.stringify(user.data));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        // this.returnUrl = '/consultant_admin/#/login';
        this.returnUrl = '/admin/#/login';
        localStorage.removeItem('currentUser');
        localStorage.removeItem('success');
        localStorage.removeItem('error');
        this.getLoggedInName.emit('Sign In');
        this.titleService.setTitle( 'Login' );
        // window.location.href=this.returnUrl;
        this.currentUserSubject.next(null);
    }

    userList(pageNo:number, pageSize:number, sortOrderId:number, sortFieldName:string, searchText:string){
        console.log(this.headerDict+' soessop');
        return this.http.post<any>(environment.httpBaseUrl+`ManageUser/UserList`,
                { pageNo, pageSize, sortOrderId, sortFieldName, searchText }, 
                this.requestOptions)
            .pipe(map(userlist => {
               console.log(userlist.data+' app con');
                // login successful if there's a jwt token in the response
            //    return (userlist.data);
                return userlist.data;
                
            }));
    }
}