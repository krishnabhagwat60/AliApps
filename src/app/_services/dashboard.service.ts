import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class DashboardService {
  public headerDict: {};
  public requestOptions: {};

  constructor(private http: HttpClient) {

    this.headerDict = {
      'Content-Type': 'application/json',
      'AppId': '3',
      'UserId': (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '',
      'LoginToken': (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '',
      'LanguageId': '5cb58388dbe4973a7ce65b7d',
      'DeviceId': environment.deviceId
    };

    this.requestOptions = {
      headers: new HttpHeaders(this.headerDict),
    };
  }

  getAll(pageNo: number, pageSize: number, sortOrderId: number, sortFieldName: string, searchText: string) {
    console.log(this.headerDict);
    console.log('firstlogin');
    return this.http.post<any>(environment.httpBaseUrl + `ManageDashboard/DashboardDetails`,
      { pageNo, pageSize, sortOrderId, sortFieldName, searchText },
      )
      .pipe(map(categoryList => {
        console.log(categoryList.data + ' app con');
        return categoryList.data;

      }));
  }
  resetDashboard(){
      return this.http.post<any>(environment.httpBaseUrl + 'ManageDashboard/ResetDashboardDetails', this.requestOptions);
  }

  
}
