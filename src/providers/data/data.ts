import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  public data: any;
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }

  public load(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('assets/data/questions.json').map(res => res).subscribe((data:any) => {
        this.data = data.questions;
        resolve(this.data);
      });

    });
  }
}
