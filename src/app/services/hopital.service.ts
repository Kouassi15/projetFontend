import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HopitalService {

  constructor(private httpClient: HttpClient) { }
 
   baseURL = 'http://localhost:8000/';

   getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get('http://localhost:8000/', { headers });
  }

   getListHopital(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseURL+'tous/hopital');
   }

   createHopital(hopitalData: any) {
    //  const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.baseURL + 'ajouter/hopital', hopitalData);
   }

   getHopitalById(id: number): Observable<any>{
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.get<any>(`${this.baseURL}/${id}`, {headers});
  }

   updateHopital(id: number): Observable<Object>{
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.put(`${this.baseURL}/update/${id}`, {headers});
   }

   deleteHopital(id: number): Observable<Object>{
    //  const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
   }
  
}

