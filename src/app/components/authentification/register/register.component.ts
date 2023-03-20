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

  form!: FormGroup ;
   submitted = false;
   // vals = ''
  // data= this.vals.split(',');

  constructor(private fb: FormBuilder,
              private router: Router, 
              private registerService :RegisterService
  ){}



  ngOnInit(): void {
    this.form = this.fb.group({

      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      username: ['', Validators.required],
      password:[ '',[Validators.required,Validators.maxLength(8)]],
      confirmpassword: ['', [Validators.required,Validators.minLength(8)]],

    });
    
  }
   // getter pratique pour un accès facile aux champs du formulaire
  // get f() { 
  //   return this.form.controls; 
  //   }

    //   onSubmit(){
  //     if (this.regiorm.invalid) {
  //               return;
  //           }
  //     // console.log(this.registerForm.value);
      
  //     this.userService.createUser(this.registerForm.value).subscribe(
  //       (data:any)=>{
  //         console.log(data);
          
  //          this.router.navigate(['/login-user']);  
  //       },  
  //      error => {  
  //        alert(error);
  //      });
  //     // //afficher les valeurs du formulaire en cas de succès
  //     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  // }


  submit(){
      this.registerService.createUser(this.form.value).subscribe(
        (data:any)=>{
          console.log(data);
          this.router.navigate(['/auth/login'])
        }
      );
   }
  }

  


  //   onSubmit(){
  //     if (this.registerForm.invalid) {
  //               return;
  //           }
  //     // console.log(this.registerForm.value);
      
  //     this.userService.createUser(this.registerForm.value).subscribe(
  //       (data:any)=>{
  //         console.log(data);
          
  //          this.router.navigate(['/login-user']);  
  //       },  
  //      error => {  
  //        alert(error);
  //      });
  //     // //afficher les valeurs du formulaire en cas de succès
  //     // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  // }

  // onReset() {
  //     this.submitted = false;
  //     this.registerForm.reset();
  // }
