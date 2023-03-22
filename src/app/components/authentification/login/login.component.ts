import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;

  submitted = false;
  constructor(
    private fb: FormBuilder,
    private loginService : LoginService    

    ){}


  ngOnInit(): void {
    this.form = this.fb.group({
      username:['',Validators.required],
      password:[ '',Validators.required, Validators.maxLength(8)],
    })
    }

    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
    submit(){
      console.log(this.form.value);
      alert('ok')
   }
 
   
 
   Submit(): void {
     this.submitted = true;
 
     if (this.form.invalid) {
       return;
     }
 }
}
