import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeriodicElement } from '../models/PeriodicElement';

@Injectable()
export class PeriodicElementService {
  showMessege(arg0: string) {
    throw new Error('Method not implemented.');
  }
  
  elementApiUrl = 'http://localhost:3001/Symbols';

  constructor(private http: HttpClient) { }

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementApiUrl);
  }

  createElements(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.post<PeriodicElement>(this.elementApiUrl, element);
  }

  editElement(element: PeriodicElement): Observable<PeriodicElement> {
    return this.http.put<PeriodicElement>(this.elementApiUrl, element);
  }
  deleteElement(id: number):Observable<any>{
    const url = `${this.elementApiUrl}/id=${id}`
    return this.http.delete<PeriodicElement>(url);
  }
  
  }
  //deleteElement(id: number): Observable<any> {
   // return this.http.delete<any>(`${this.elementApiUrl}?id=${id}`);
 // }
//}
