import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { Admin } from '../_models';
@Injectable({ providedIn: 'root' })


export class AdminService {
  public headerDict: {};
  public requestOptions: {};

  constructor(private http: HttpClient) {

    this.headerDict = {
      'Content-Type': 'application/json',
      // 'Content-Type': 'multipart/form-data',
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

  getAll(pageNo: number, pageSize: number, sortOrderId: number, sortFieldName: string, searchText: string, userStatusId: number) {
    console.log(this.headerDict + ' soessop');
    return this.http.post<any>(environment.httpBaseUrl + `ManageAccount/AdminList`,
      { pageNo, pageSize, sortOrderId, sortFieldName, searchText, userStatusId },
      this.requestOptions)
      .pipe(map(adminList => {
        console.log(adminList.data + ' app con');
        return adminList.data;

      }));
  }

  deleteAdminById(adminId: string): Observable<Admin> {

    return this.http.post<Admin>(environment.httpBaseUrl + 'ManageAccount/DeleteAdmin', { 'adminId': adminId }, this.requestOptions);
  }

  create(params:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageAccount/CreateAdmin`,
    params,
    this.requestOptions)
    .pipe(map(result => {
      console.log(JSON.stringify(result) + 'done');

      return result;

    }));
  }

  update(params:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageAccount/UpdateAdmin`,
    params,
    this.requestOptions)
    .pipe(map(result => {
      console.log(JSON.stringify(result) + 'done');

      return result;

    }));
  }

  getAdminById(adminId:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageAccount/ViewAdmin`,
    {"adminId": adminId },
    this.requestOptions)
    .pipe(map(result => {
      console.log(JSON.stringify(result.data) + 'done');

      return result.data;

    }));
  }

  getTranscationsList(userId, pageNo: number, pageSize: number, sortOrderId: number, sortFieldName: string, searchText: string) {
    console.log(this.headerDict + ' soessop');
    return this.http.post<any>(environment.httpBaseUrl + `ManageProvider/TransactionHistory`,
      { userId, pageNo, pageSize, sortOrderId, sortFieldName, searchText },
      this.requestOptions)
      .pipe(map(adminList => {
        console.log(adminList.data + ' app con');
        return adminList.data;

      }));
  }
}
