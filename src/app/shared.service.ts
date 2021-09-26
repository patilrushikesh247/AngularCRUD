import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from  'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  postData(data:any){
    return this.httpClient.post(" https://jsonplaceholder.typicode.com/posts",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getData(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateData(data:any,id:number){
    return this.httpClient.post(" https://jsonplaceholder.typicode.com/posts/1",+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  
  deleteData(id:number){
    return this.httpClient.post(" https://jsonplaceholder.typicode.com/posts/1",+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  
}
