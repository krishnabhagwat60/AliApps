import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Consultant } from '../_models';
@Injectable({ providedIn: 'root' })


export class ConfigurationService {
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

    editSystemConfiguration(params: any) {
        return this.http.post<any>(environment.httpBaseUrl + `ManageSystemConfiguration/EditSystemConfiguration`,
            params,
            this.requestOptions)
            .pipe(map(result => {
                return result;
            }));
    }

    getSystemConfiguration() {
        return this.http.post<any>(environment.httpBaseUrl + `ManageSystemConfiguration/GetSystemConfiguration`,
            {},
            this.requestOptions)
            .pipe(map(result => {
                return result.data;
            }));
    }
}