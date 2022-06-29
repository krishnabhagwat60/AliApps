import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';
import { Consultant } from '../_models';
@Injectable({ providedIn: 'root' })


export class ReportService {
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

    // getData(params: any) {
    //     // console.log(this.headerDict + ' soessop');
    //     return this.http.post<any>(environment.httpBaseUrl + `ManageReports/AdminCommission`, params,
    //         this.requestOptions)
    //         .pipe(map(planList => {
    //             // console.log(planList.data + ' app con');
    //             return planList.data;

    //         }));
    // }

    getReportByFilter(parameter: any) {
        var params = {
            "startDate": (parameter.startDate) ? parameter.startDate + "T00:00:00" : '',
            "endDate": (parameter.endDate) ? parameter.endDate + "T23:59:59" : ''
        }
        return this.http.post<any>(environment.httpBaseUrl + `ManageReports/AdminCommission`,
            params,
            this.requestOptions)
            .pipe(map(planList => {
                // console.log(planList.data + ' app con');
                return planList.data;

            }));
    }
    createUpdate(params: any) {
        return this.http.post<any>(environment.httpBaseUrl + `ManagePlan/AddUpdatePlan`,
            params,
            this.requestOptions)
            .pipe(map(result => {
                // console.log(JSON.stringify(result) + 'done');

                return result;

            }));
    }

    getPlanById(planId: any) {
        return this.http.post<any>(environment.httpBaseUrl + `ManagePlan/ViewPlan`,
            { "planId": planId },
            this.requestOptions)
            .pipe(map(result => {
                // console.log(JSON.stringify(result) + 'done');

                return result.data;

            }));
    }

    deletePlanById(planId: string): Observable<any> {
        return this.http.post<any>(environment.httpBaseUrl + 'ManagePlan/DeletePlan', { 'planId': planId }, this.requestOptions).pipe(map(planList => {
            return planList;

        }));
    }

    ageGroupWiseGenderRegisteredReport(pageNo, pageSize, commonFromDate, commonToDate) {
        var param = {
            "pageNo": pageNo,
            "pageSize": pageSize,
            "startDate": (commonFromDate) ? commonFromDate + "T00:00:00" : '',
            "endDate": (commonToDate) ? commonToDate + "T23:59:59" : ''
        }
        return this.http.post<any>(environment.httpBaseUrl + 'ManageReports/AgeGroupWiseGenderRegisteredReport', param, this.requestOptions).pipe(map(response => {
            response.data.records = response.data.records.map(index=>{
                index.total = index.registerdMale + index.registerdFemale;
                return index;
            })
            return response;
        })).toPromise();
    }

    countryWiseUserRegisteredReport(pageNo, pageSize, commonFromDate, commonToDate) {
        var param = {
            "pageNo": pageNo,
            "pageSize": pageSize,
            "startDate": (commonFromDate) ? commonFromDate + "T00:00:00" : '',
            "endDate": (commonToDate) ? commonToDate + "T23:59:59" : ''
        }
        return this.http.post<any>(environment.httpBaseUrl + 'ManageReports/CountryWiseRegisteredUserCountReport', param, this.requestOptions).pipe(map(response => {
            return response;
        })).toPromise();
    }

    consultantsAndAdminCommissionReport(pageNo, pageSize, commonFromDate, commonToDate) {
        var param = {
            "pageNo": pageNo,
            "pageSize": pageSize,
            "startDate": (commonFromDate) ? commonFromDate + "T00:00:00" : '',
            "endDate": (commonToDate) ? commonToDate + "T23:59:59" : ''
        }
        return this.http.post<any>(environment.httpBaseUrl + 'ManageReports/UserPaidToConsultantsAndAdminCommissionReport', param, this.requestOptions).pipe(map(response => {
            return response;
        })).toPromise();
    }

    feedbackCountReport(pageNo, pageSize, commonFromDate, commonToDate) {
        var param = {
            "pageNo": pageNo,
            "pageSize": pageSize,
            "startDate": (commonFromDate) ? commonFromDate + "T00:00:00" : '',
            "endDate": (commonToDate) ? commonToDate + "T23:59:59" : ''
        }
        return this.http.post<any>(environment.httpBaseUrl + 'ManageReports/FeedbackCountReport', param, this.requestOptions).pipe(map(response => {
            return response;
        })).toPromise();
    }
}