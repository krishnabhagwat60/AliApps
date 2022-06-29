import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })


export class CategoriesService {
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
    console.log(this.headerDict + ' soessop');
    return this.http.post<any>(environment.httpBaseUrl + `ManageCategory/CategoryList`,
      { pageNo, pageSize, sortOrderId, sortFieldName, searchText },
      this.requestOptions)
      .pipe(map(categoryList => {
        console.log(categoryList.data + ' app con');
        return categoryList.data;

      }));
  }

  deleteCategoryById(categoryId: string): Observable<any> {
    return this.http.post<any>(environment.httpBaseUrl + 'ManageCategory/DeleteCategory', { 'categoryId': categoryId }, this.requestOptions).pipe(map(categoryList => {
      return categoryList;

    }));
  }

  getAllCategories(categoryId: null) {
    return this.http.post<any>(environment.httpBaseUrl + `Category/CategoryList`,
      { categoryId },
      this.requestOptions)
      .pipe(map(categoryList => {
        console.log(categoryList.data + ' app con');

        return categoryList.data;

      }));

  }

  getAllSubCategories(categoryId:string, pageNo: number, pageSize: number, sortOrderId: number, sortFieldName: string, searchText: string) {
    console.log(this.headerDict + ' soessop');
    return this.http.post<any>(environment.httpBaseUrl + `ManageCategory/SubCategoryList`,
      {categoryId, pageNo, pageSize, sortOrderId, sortFieldName, searchText },
      this.requestOptions)
      .pipe(map(categoryList => {
        console.log(categoryList.data + ' app con');
        return categoryList.data;

      }));
  }

  create(params:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageCategory/AddUpdateCategory`,
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

  getCategoryById(categoryId:any){
    return this.http.post<any>(environment.httpBaseUrl + `ManageCategory/ViewCategory`,
    {"categoryId":categoryId},
    this.requestOptions)
    .pipe(map(result => {
      console.log(JSON.stringify(result) + 'done');

      return result.data;

    }));
  }

  
}
