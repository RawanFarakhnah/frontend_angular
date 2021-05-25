import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UplodeFileService {

  constructor(private http:HttpClient) { }

  
  getfileTableContant (){
    return this.http.get('http://127.0.0.1:8000/upload');
  }
  
  InsertfileTableContant (data:any){
    
    return this.http.post('http://127.0.0.1:8000/file-upload', data);
  }

}
