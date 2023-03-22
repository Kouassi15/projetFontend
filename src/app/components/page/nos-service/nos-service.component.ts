import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedecinService } from 'src/app/services/medecin.service';
import { SpecialiteService } from 'src/app/services/specialite.service';
import { NosServiceService } from 'src/app/services/nos-service.service';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nos-service',
  templateUrl: './nos-service.component.html',
  styleUrls: ['./nos-service.component.css']
})
export class NosServiceComponent implements OnInit {

  globalform!: FormGroup;
  listspecialite: any;
  listcommune: any;


  listeMedecinSpecialite: any

  constructor(
    private fb: FormBuilder,
    private specialiteService: SpecialiteService,
    private _specialiteService: NosServiceService,
    private router: Router
  ) { }


  ngOnInit() {
    this.globalform = this.fb.group({
      specialite: ['', Validators.required],

    });

    //recuperer la liste  des specialites dans la variable listespecialite
    this.specialiteService.getListspecialite().subscribe(
      (data: any) => {
        console.log(data);
        this.listspecialite = data
      })

  }

  onSubmit() {
    const specialite = this.globalform.value;
    this._specialiteService.getMedecinBySpecialite(specialite).subscribe({
      next: (response: any) => {
        this.listeMedecinSpecialite = response;
        localStorage.setItem('listeMedecinSpecialite', JSON.stringify(this.listeMedecinSpecialite));
        this.router.navigate(['/page/globale-list']);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }



}
