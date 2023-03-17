import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httOptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ServicecommuneService {
  constructor(private httpClient: HttpClient) { }
 
   baseURL = 'http://localhost:8000/';

   getData() {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get('http://localhost:8000/', { headers });
  }

   getListcommune(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseURL+'tous/commune');
   }

   createCommune(communeData: any) {
    //  const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    return this.httpClient.post(this.baseURL + 'ajouter/commune', communeData);
   }

   getCommuneById(id: number): Observable<any>{
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.get<any>(`${this.baseURL}/${id}`, {headers});
  }

   updateCommune(id: number): Observable<Object>{
     const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.put(`${this.baseURL}/update/${id}`, {headers});
   }

   deleteCommune(id: number): Observable<Object>{
    //  const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
     return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
   }
  // Http Headers

  // // Error handling
  // errorHandl(error:any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     return errorMessage;
  //   });
  // }
  
}


     





