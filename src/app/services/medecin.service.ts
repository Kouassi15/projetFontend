import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  baseURL = 'http://localhost:8000/';

  constructor(private httpClient: HttpClient) { }
  getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get('http://localhost:8000/', { headers });
  }

  getListmedecin(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseURL+'tous/medecin');
   }

   createMedecin(hopitalData: any) {
    // const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.baseURL + 'ajouter/medecin', hopitalData);
   }

   getMedecinById(id: number): Observable<any>{
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.get<any>(`${this.baseURL}/${id}`, {headers});
  }

   updateMedecin(id: number): Observable<Object>{
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.put(`${this.baseURL}/update/${id}`, {headers});
   }

   deleteMedecin(id: number): Observable<Object>{
    //  const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
   }
}
