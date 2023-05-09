import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MydriveServiceService {

  constructor(private httpClient : HttpClient) { }

  backendLink = 'http://localhost:3000/'

  register(form:any):Observable<any>{
    return this.httpClient.post(this.backendLink + 'user/register', form)
  }

  login(form:any):Observable<any>{
    return this.httpClient.post(this.backendLink + 'user/login', form)
  }

  token= localStorage.getItem('token')

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('authorization', 'Bearer ' + this.token);

  getAllFileList():Observable<any>{
    return this.httpClient.get(this.backendLink + 'drive', {headers: this.headers})
  }

  uploadFile(form:any): Observable<any>{
    return this.httpClient.post(this.backendLink + 'drive', form, {headers: this.headers})
  }

  deleteOneFile(fileName:any): Observable<any>{
    return this.httpClient.delete(this.backendLink + 'drive/file/' + fileName, {headers: this.headers})
  }

  getOneFile(fileName:any): Observable<any>{
    return this.httpClient.get(this.backendLink + 'drive/file/' + fileName, {headers: this.headers, responseType: 'blob'})
  }

}
