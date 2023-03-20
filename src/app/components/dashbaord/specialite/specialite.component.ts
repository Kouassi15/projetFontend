import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControlName, FormBuilder, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { HopitalService } from 'src/app/services/hopital.service';
import { MedecinService } from 'src/app/services/medecin.service';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit{

  specialiteform!: FormGroup;
  listhopital : any;
  listmedecin: any;
  enregistrer = -1;

  constructor(
    private fb: FormBuilder,
    private specialiteService: SpecialiteService,
    private hopitalService : HopitalService,
    private medecinService : MedecinService,
    private router : Router

  ){}

  ngOnInit(): void {

    // recupere la  liste hopitaux pour mettre dans ma var listhopital
    this.hopitalService.getListHopital().subscribe(
      (response: any)=>{
        console.log(response);
        this.listhopital = response;
  
    })

  //recuperer la liste  medecins dans la variable listmedecin
  
  this.medecinService.getListmedecin().subscribe(
    (data:any)=>{
      console.log(data);
      this.listmedecin = data;
      // this.router.navigate(['/page/header']);
  })

    this.specialiteform = this.fb.group({
      nom:['',Validators.required],
      id_hopital:['',Validators.required],
      id_medecin:['',Validators.required]
    })
}


  onsubmit(){
    console.log(this.specialiteform.value)
    this.specialiteService.createSpecialite(this.specialiteform.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.enregistrer=data.code==200?1:0;
      //  this.router.navigate(['/dashbaord/index']);
    })

  }

}
