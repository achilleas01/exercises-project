import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppealSub } from './appeal.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  constructor(private http: HttpClient) { }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getAllApplications(): Observable<AppealSub[]> {
    
    return this.http.get<AppealSub[]>(
        'http://localhost:4600/applications',
        this.httpOptions
      );
  }
}
