import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControlName,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HopitalService } from 'src/app/services/hopital.service';

@Component({
  selector: 'app-hopital',
  templateUrl: './hopital.component.html',
  styleUrls: ['./hopital.component.css']
})
export class HopitalComponent implements OnInit {

  hopitalForm!: FormGroup ;

  ngOnInit(): void {
    this.hopitalForm = this.fb.group({
      nom: [' ', Validators.required],
    longitude:['',Validators.required],
    latitude :['',Validators.required],
    specialite :['',Validators.required]
    });
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private hopitalService : HopitalService
  ) {}
  
  submitForm() {

      this.hopitalService.createHopital(this.hopitalForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['/page/header']);
        }
      )
    }
}
