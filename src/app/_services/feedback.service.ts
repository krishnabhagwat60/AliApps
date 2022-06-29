import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { Consultant } from '../_models';
import { FeedbackRoutingModule } from '../views/feedback/feedback-routing.module';
@Injectable({ providedIn: 'root' })


export class FeedbackService {
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

    getAll(pageNo: number, pageSize: number, sortOrderId: number, sortFieldName: string, searchText: string) {
        console.log(this.headerDict + ' soessop');
        return this.http.post<any>(environment.httpBaseUrl + `ManageFeedback/FeedbackList`,
            { pageNo, pageSize, sortOrderId, sortFieldName, searchText },
            this.requestOptions)
            .pipe(map(degreeList => {
                console.log(degreeList.data + ' app con');
                return degreeList.data;

            }));
    }

    createUpdate(params: any) {
        return this.http.post<any>(environment.httpBaseUrl + `ManageDegree/AddUpdateDegree`,
            params,
            this.requestOptions)
            .pipe(map(result => {
                console.log(JSON.stringify(result) + 'done');

                return result;

            }));
    }

    getFeedbackById(FeedbackRoutingModule: any) {
        return this.http.post<any>(environment.httpBaseUrl + `ManageFeedback/ViewFeedback`,
            { "feedbackId": FeedbackRoutingModule },
            this.requestOptions)
            .pipe(map(result => {
                console.log(JSON.stringify(result) + 'done');

                return result.data;

            }));
    }

    deleteFeedbackById(FeedbackRoutingModule: string): Observable<any> {
        return this.http.post<any>(environment.httpBaseUrl + 'ManageFeedback/DeleteFeedback', { 'feedbackId': FeedbackRoutingModule }, this.requestOptions).pipe(map(degreeList => {
            return degreeList;

        }));
    }
}