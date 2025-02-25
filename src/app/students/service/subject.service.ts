import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private jsonUrl = 'assets/data/subject.json';

  constructor(private http: HttpClient) { }
  

  getSubjects(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
    
  }

}
