import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../_models';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class WithdrawalService {
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

    getAll(pageNo:number, pageSize:number, sortOrderId:number, sortFieldName:string, searchText:string){
            console.log('hii ankesh');
        return this.http.post<any>(environment.httpBaseUrl+`ManageWithdraw/WithdrawList`,
                { pageNo, pageSize, sortOrderId, sortFieldName, searchText }, 
                this.requestOptions)
            .pipe(map(withdrawlist => {
               console.log(withdrawlist.data+' app con');
                // login successful if there's a jwt token in the response
            //    return (userlist.data);
                return withdrawlist.data;
                
            }));
    }

   

    payWithdraw(withdrawId:any){
        return this.http.post<any>(environment.httpBaseUrl + `ManageWithdraw/PaidByAdmin`,
        {'withdrawDetailsId':withdrawId},
        this.requestOptions)
        .pipe(map(result => {
            console.log(JSON.stringify(result) + 'apidone');

            return result;

        }));
    }
}