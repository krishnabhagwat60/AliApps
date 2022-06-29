import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { Consultant } from '../_models';
@Injectable({ providedIn: 'root' })


export class ConsultantService {
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
    return this.http.post<any>(environment.httpBaseUrl + `ManageProvider/ProviderList`,
      { pageNo, pageSize, sortOrderId, sortFieldName, searchText, userStatusId },
      this.requestOptions)
      .pipe(map(consultantList => {
        console.log(consultantList.data + ' app con');
        return consultantList.data;

      }));
  }

  deleteConsultantById(userId: string): Observable<Consultant> {

    return this.http.post<Consultant>(environment.httpBaseUrl + 'ManageProvider/DeleteProvider', { 'userId': userId }, this.requestOptions);
  }

  deleteSelectedConsultantById(userId: []): Observable<Consultant> {

    return this.http.post<Consultant>(environment.httpBaseUrl + 'ManageProvider/DeleteProvider', { 'userId': userId }, this.requestOptions);
  }

  getAllCategories(categoryId: null) {
    return this.http.post<any>(environment.httpBaseUrl + `common/CategoryList`,
      { categoryId },
      this.requestOptions)
      .pipe(map(categoryList => {
        console.log(categoryList.data + ' app con');

        return categoryList.data;

      }));

  }

  getAllDegree(){
    return this.http.post<any>(environment.httpBaseUrl + `Common/LookupDetails`,
    {'lookupCode':1},
    this.requestOptions)
    .pipe(map(degreeList => {
      return degreeList.data;
    }));
  }

  getAllLanguage(){
    return this.http.post<any>(environment.httpBaseUrl + `Common/LookupDetails`,
    {'lookupCode':2},
    this.requestOptions)
    .pipe(map(degreeList => {
      return degreeList.data;
    }));
  }

  create(params:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageProvider/CreateProvider`,
    params,
    this.requestOptions)
    .pipe(map(result => {
      console.log(JSON.stringify(result) + 'done');

      return result;

    }));
  }

  update(params:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageProvider/UpdateProvider`,
    params,
    this.requestOptions)
    .pipe(map(result => {
      console.log(JSON.stringify(result) + 'done');

      return result;

    }));
  }

  getConsultantById(consultantId:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageProvider/ViewProvider`,
    {"userId": consultantId },
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
      .pipe(map(consultantList => {
        console.log(consultantList.data + ' app con');
        return consultantList.data;

      }));
  }
}
