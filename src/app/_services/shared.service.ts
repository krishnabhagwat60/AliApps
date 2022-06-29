import { Injectable } from '@angular/core';

@Injectable()
export class AppService{
    Title;

    constructor(){
     
    
    }

    setMyGV(val: any){
      this.Title = val;
    }

    getMyGV(){
      return this.Title;
    }
}