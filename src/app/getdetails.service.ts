import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdetailsService {

  constructor(private http:HttpClient) { }

  getcoursedata(): Observable<any>{
   return this.http.get<any>('https://api.jsonbin.io/v3/b/673af531ad19ca34f8cbe3cb');
}
}
