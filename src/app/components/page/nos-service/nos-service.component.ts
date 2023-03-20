import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedecinService } from 'src/app/services/medecin.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import{ NosServiceService} from 'src/app/services/nos-service.service';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';

@Component({
  selector: 'app-nos-service',
  templateUrl: './nos-service.component.html',
  styleUrls: ['./nos-service.component.css']
})
export class NosServiceComponent implements OnInit {

  globalform!:FormGroup;
  listspecialite:any;
  listmedecin:any;
  listcommune:any;

  constructor(
    private fb: FormBuilder,
    private specialiteService :SpecialiteService,
    private medecinService : MedecinService,
    private noserviceService : NosServiceService,
    private formService : ServicecommuneService
  ){}


  ngOnInit(){
    this.globalform = this.fb.group({

      specialite:['',Validators.required],
      medecin: ['',Validators.required],
      commune :['',Validators.required]
      
    });

    //recuperer la liste  des specialites dans la variable listespecialite
this.specialiteService.getListspecialite().subscribe(
  (data:any)=>{
    console.log(data);
    this.listspecialite = data;
    //this.router.navigate(['/dashbaord/index']);
  })

   //recuperer la liste  medecins dans la variable listmedecin
  
   this.medecinService.getListmedecin().subscribe(
    (data:any)=>{
      console.log(data);
      this.listmedecin = data;
      // this.router.navigate(['/page/header']);
    })

     //recuperer la liste  des  communes dans la variable listecommune
    
  this.formService.getListcommune().subscribe(
    (data:any)=>{
      console.log(data);
      this.listcommune = data;
      // this.router.navigate(['/page/header']);
    })
    

}

    onSubmit(){}
   

}
