import { Component } from '@angular/core';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { MedecinService } from 'src/app/services/medecin.service';
// import { HopitalService } from 'src/app/services/hopital.service';
import { HopitalService } from 'src/app/services/hopital.service';

@Component({
  selector: 'app-list-specialite',
  templateUrl: './list-specialite.component.html',
  styleUrls: ['./list-specialite.component.css']
})
export class ListSpecialiteComponent {

  Specialites: any = [];
   hopital:any;
   medecin:any;
   nom: any


   constructor(
     private specialiteService : SpecialiteService ,private hopitalService: HopitalService){ }  
    
     ngOnInit() {
      this.getSpecialite();
      this.getHopital();
      }

    getHopital(){
      this.hopitalService.getListHopital().subscribe(data =>{
        this.hopital = data;
      });
    }
   getSpecialite(){
      this.specialiteService.getListspecialite().subscribe(data =>{
        this.Specialites = data;
        console.log(data);
      });
    }

    
    specialiteDetails(id: number): void {
         this.specialiteService.getSpecialiteById(id).subscribe(() => {
           this.getSpecialite();
         });
       }

        updateSpecialite(id: number): void {
    this.specialiteService.updateSpecialite(id).subscribe(() => {
      this.getSpecialite();
      });
    }
    
     deleteSpecialite(id: number): void {
     this.specialiteService.deleteSpecialite(id).subscribe(() => {
       this.getSpecialite();
      });
     }

}
