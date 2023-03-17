import { Component } from '@angular/core';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent {
    name='nom';
    addForm:any;

  //   constructor( private http: HttpClient) { }
  // baseUrl: string = 'http://localhost/crudmysql/';

  // getStudents() {
  //   return this.http.get<commune[]>(this.baseUrl+'view.php');
  // } 

}

