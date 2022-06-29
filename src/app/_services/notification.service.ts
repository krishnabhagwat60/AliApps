import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { Consultant } from '../_models';
import { FeedbackRoutingModule } from '../views/feedback/feedback-routing.module';
@Injectable({ providedIn: 'root' })


export class NotificationService {
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

    create(params: any) {
        console.log(params);
        return this.http.post<any>(environment.httpBaseUrl + `ManageNotification/SendNotification`,
            params,
            this.requestOptions)
            .pipe(map(result => {
                console.log(params);
                return result;
            }));
    }


      getAllUsers() {
        return this.http.post<any>(environment.httpBaseUrl + `ManageUser/UserList`,
          this.requestOptions)
          .pipe(map(usersList => {
            console.log(usersList.data + ' app con');

            return usersList.data;

          }));

      }
      getAllProvider() {
        return this.http.post<any>(environment.httpBaseUrl + `ManageProvider/ListProviders`,
          this.requestOptions)
          .pipe(map(providerList => {
            console.log(providerList.data + ' app con');

            return providerList.data;

          }));

      }



}