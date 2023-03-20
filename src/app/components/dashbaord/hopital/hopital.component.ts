import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControlName,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HopitalService } from 'src/app/services/hopital.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {

  hopitalForm!: FormGroup ;
  listspecialite: any;
  listcommune: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private hopitalService : HopitalService,
    private specialiteService : SpecialiteService,
    private formService : ServicecommuneService 
  ) {}

  ngOnInit(): void {

    // recupere la  liste specialites pour mettre dans ma var listspecialite
    this.specialiteService.getListspecialite().subscribe(
        (response: any)=>{
          console.log(response);
          this.listspecialite = response;
        }
    )

    //recuperer la liste  des  communes dans la variable listecommune
    
    this.formService.getListcommune().subscribe(
      (data:any)=>{
        console.log(data);
        this.listcommune = data;
        // this.router.navigate(['/page/header']);
      }
    )
  
    // creer mon formulaire
    this.hopitalForm = this.fb.group({
      nom: ['', Validators.required],
    longitude:['',Validators.required],
    latitude :['',Validators.required],
    id_specialite :['',Validators.required],
    id_commune :['',Validators.required]
    });
  }


  
  
  submitForm() {

      this.hopitalService.createHopital(this.hopitalForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          // this.router.navigate(['/page/header']);
        }
      )

    }

    
}
