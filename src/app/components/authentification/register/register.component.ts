import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any;
  submitted = false;
  // vals = ''
  // data= this.vals.split(',');

  constructor(private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) { }



  ngOnInit(): void {
    this.form = this.fb.group({

      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.maxLength(8)]],
    });

  }
  //  getter pratique pour un accès facile aux champs du formulaire
  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.invalid) {
      alert('ok')
    }

    this.registerService.createUser(this.form.value).subscribe(
      (data: any) => {
        console.log(this.form.value);

        console.log(data);
      },

      // message d'erreur de sai ;  
      error => {
        alert(error);
      });
    // //afficher les valeurs du formulaire en cas de succès
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    this.form = this.fb.group({

      firstname: [''],
      email: [''],
      username: [''],
      password: [''],
    })

  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}
