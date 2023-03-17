import { ParsedVariable } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl ,FormBuilder, FormGroup, FormControl,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //form!: FormGroup;
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
   

  });
  //  submitted = false;
  constructor(private fb: FormBuilder,
              private router: Router, 
              private registerService :RegisterService
              ){}


  ngOnInit(): void {
    this.form = this.fb.group({

      name:['',Validators.required],
      email:['',Validators.required],
      password:[
        '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(8)
          ]
      ],
      // confirmPassword: ['',[
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(8)
      // ] ],
    })
    {
      //Validators: [Validators.match('password', 'confirmPassword')]
    }
  };
  submit(){
      this.registerService.createUser(this.form.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['/auth/login'])
        }
      );
   }

  // get f(): { [key: string]: AbstractControl } {
  //   return this.form.controls;
  // }

  // Submit(): void {
  //   this.submitted = true;

    // if (this.form.invalid) {
    //   return;
    // }
}
// this.formService.createCommune(this.RegisterCommune.value).subscribe(
//   (data:any)=>{
//     console.log(data);
//     this.router.navigate(['/page/header']);
//   }
// )
// }

// submitForm() {

//   if (this.formRegister.valid) {
//     // request create
//     this.svcApi.createReservation(this.formRegister.value).subscribe(
//       (response: any) => {
//         // if created = 1 or If error error = 0
//         this.isOk = response.code == 200 ? 1 : 0;
//         if (this.isOk) {
//           this.formRegister.reset(); // form.reset();
//         }
//       },
//       error => console.log(`Error ${error}`)
//     );
//   }
// }

// createReservation() {
//   if (this.formRegister.valid) {
//     this.svcApi.createReservation(this.formRegister.value).subscribe(
//       (response: any) => {
//         this.isOk = response.code == 200 ? 1 : 0;
//         if (this.isOk) {
//           this.formRegister.reset();
//         }
//       },
//       error => console.log(`Error ${error}`)
//     );
//   }
// }
// }
