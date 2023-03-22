import { Component, OnChanges, OnInit } from '@angular/core';
import { NosServiceService } from 'src/app/services/nos-service.service';

@Component({
  selector: 'app-globale-list',
  templateUrl: './globale-list.component.html',
  styleUrls: ['./globale-list.component.css']
})
export class GlobaleListComponent implements OnInit {

  listeMedecinSpecialite: any

  ngOnInit(): void {
    this.getLocalStorageData();
  }

  getLocalStorageData() {
    const localStorageData = localStorage.getItem('listeMedecinSpecialite');
    if (localStorageData) {
      this.listeMedecinSpecialite = JSON.parse(localStorageData);
    }
  }

}
