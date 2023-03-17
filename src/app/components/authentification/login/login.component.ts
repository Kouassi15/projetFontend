import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormControl , FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
  });

  submitted = false;
  constructor(private fb: FormBuilder){}


  ngOnInit(): void {
    this.form = this.fb.group({
      email:['',Validators.required],
      password:[
        '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(8)
          ]
      ],
    })
    }
    submit(){
      console.log(this.form.value);
   }
 
   get f(): { [key: string]: AbstractControl } {
     return this.form.controls;
   }
 
   Submit(): void {
     this.submitted = true;
 
     if (this.form.invalid) {
       return;
     }
 }
}
