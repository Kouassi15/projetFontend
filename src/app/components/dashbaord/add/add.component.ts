import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  RegisterCommune!: FormGroup;

  ngOnInit(): void {
    this.RegisterCommune = this.fb.group({
      nom: [' ', Validators.required]
    });
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService : ServicecommuneService
  ) {}
  
  submitForm() {

      this.formService.createCommune(this.RegisterCommune.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['/page/header']);
        }
      )
    }

      
  }
