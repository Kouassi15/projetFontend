import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NosServiceService {
  baseURL = 'http://localhost:8000/'

  constructor(private httpClient: HttpClient) { }



 getMedecinBySpecialite(specialite: any) {

  return this.httpClient.post(this.baseURL + 'medecin/search', specialite);
 }



}
