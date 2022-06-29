import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment'


@Injectable({ providedIn: 'root' })

export class CommonService {
    param:any;
    public headerDict: {};
    public requestOptions: {};
    public headerDict2:{};
    // uploader:FileUploader = new FileUploader({url:uri})
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

        this.headerDict2 = {
            'Content-Type': 'application/json'
        };
        this.requestOptions = {
            headers: new HttpHeaders(this.headerDict),
        };
    }

    uploadFile(parameters: any, file: File) {
        
        console.log(file);

        const formdata: FormData = new FormData();
        formdata.append('file', file, file.name);
        formdata.append('fileType', parameters['fileType']);
        formdata.append('userId', parameters['userId']);
        formdata.append('categoryId', parameters['categoryId']);
        formdata.append('appointmentId', parameters['appointmentId']);
        return this.http.post('http://testupdates.net/riglynx/V7/Lookup/File_Upload_Desktop',
            { formdata },
            this.headerDict2
        )
            .pipe(map(uploadData => {
                console.log(uploadData);
                return uploadData;

            }));
    }


    makeFileRequest(params: any, files: File) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            // for(var i = 0; i < files.length; i++) {
            formData.append("file", files, files.name);
            // }

            // formData.append('File_type', '1');
            formData.append('fileType', params['fileType']);
            formData.append('userId', params['userId']);
            // formData.append('User_ID', '800');
            formData.append('categoryId', params['categoryId']);
            formData.append('appointmentId', params['appointmentId']);

            this.param = {
                'File_type':1,
                'User_ID':800,
                'Userfile':{
                    "name":files.name,
                    "type":files.type,
                    "size":files.size
                }
            }



            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", environment.httpBaseUrl + `common/UploadFile`, true);
            

            xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            xhr.setRequestHeader('AppId', '3');
            xhr.setRequestHeader('UserId', '3');
            xhr.setRequestHeader('AppId', '3');
            xhr.setRequestHeader('UserId', (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '');
            xhr.setRequestHeader('LoginToken', (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '');
            xhr.setRequestHeader('LanguageId', environment.englishLanguageId);
            xhr.setRequestHeader('DeviceId', 'Admin');
            var body = "User_ID=" + 800 + "&/File_type=" + 1 + "&Userfile=" + files.name;
            xhr.send(formData);
        });
    }

}