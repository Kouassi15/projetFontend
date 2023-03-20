import { Component } from '@angular/core';
import { MedecinService } from 'src/app/services/medecin.service';

@Component({
  selector: 'app-list-medecin',
  templateUrl: './list-medecin.component.html',
  styleUrls: ['./list-medecin.component.css']
})
export class ListMedecinComponent {


medecins:any;
 
constructor(

  private medecinform : MedecinService
){}

ngOnInit(){

  this.getMedecin();
}

getMedecin(): void {
  this.medecinform.getListmedecin().subscribe(data =>{
    this.medecins = data;

  });
}

medecinDetails(id: number): void {
  this.medecinform.getMedecinById(id).subscribe(() => {
    this.getMedecin();
  });
}

 updateMedecin(id: number): void {
this.medecinform.updateMedecin(id).subscribe(() => {
this.getMedecin();
});
}

deleteMedecin(id: number): void {
this.medecinform.deleteMedecin(id).subscribe(() => {
this.getMedecin();
});
}

}
