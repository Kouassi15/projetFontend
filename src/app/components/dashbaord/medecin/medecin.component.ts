import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControlName, FormBuilder, Validators, } from '@angular/forms';
import { MedecinService } from 'src/app/services/medecin.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit{

medecinform!: FormGroup;
listspecialite : any=[];


constructor(
  private  medecinService : MedecinService,
  private fb: FormBuilder,
  private specialiteService : SpecialiteService,

 

){}

ngOnInit(): void {

  // creer un formulaire
  this.medecinform = this.fb.group({
    nom:['',Validators.required],
    prenom:['',Validators.required],
    telephone:['',Validators],
    id_specialite:['',Validators.required]

  });

//recuperer la liste  des specialites dans la variable listespecialite
this.specialiteService.getListspecialite().subscribe(
  (data:any)=>{
    console.log(data);
    this.listspecialite = data;
    //this.router.navigate(['/dashbaord/index']);
  })
 
}
   
onSubmit(){

  this.medecinService.createMedecin(this.medecinform.value).subscribe(
    (data:any)=>{
      console.log(data);
     //this.router.navigate(['/dashbaord/index']);
    }
  )
}

}
