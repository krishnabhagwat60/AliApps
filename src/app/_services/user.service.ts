import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    public headerDict: {};
    public requestOptions: {};
    
    constructor(private http: HttpClient) {

        this.headerDict = {
            'Content-Type': 'application/json',
            'AppId': '3',
            'UserId': (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '',
            'LoginToken': (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '',
            'LanguageId': environment.englishLanguageId,
            'DeviceId': environment.deviceId
        };

        this.requestOptions = {
            headers: new HttpHeaders(this.headerDict),
        };
    }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    createUser(user: User): Observable<User> {

        //return this.http.post<User>(environment.httpBaseUrl + 'ManageUser/CreateConsumer', user, this.requestOptions);
        return;
    }

    updateUser(user: User): Observable<User> {

        return this.http.put<User>(environment.httpBaseUrl + '/UpdateUserDetails/', user, this.requestOptions);
    }

    deleteUserById(userId: string): Observable<User> {

        return this.http.post<User>(environment.httpBaseUrl + 'ManageUser/DeleteConsumer',  {'userId':userId}, this.requestOptions);
    }
    deleteSelectedUserById(userId: []): Observable<User> {

        return this.http.post<User>(environment.httpBaseUrl + 'ManageUser/DeleteConsumer',  {'userId':userId}, this.requestOptions);
    }

    addCredit(params:any){
        return this.http.post<any>(environment.httpBaseUrl + `ManageUser/AddCreditsByAdmin`,
        params,
        this.requestOptions)
        .pipe(map(result => {
            console.log(JSON.stringify(result) + 'done');

            return result;

        }));
    }

    getTranscationsList(userId, pageNo: number, pageSize: number, sortOrderId: number, sortFieldName: string, searchText: string) {
        console.log(this.headerDict + ' soessop');
        return this.http.post<any>(environment.httpBaseUrl + `ManageUser/TransactionHistory`,
          { userId, pageNo, pageSize, sortOrderId, sortFieldName, searchText },
          this.requestOptions)
          .pipe(map(consultantList => {
            console.log(consultantList.data + ' app con');
            return consultantList.data;
    
          }));
      }
}