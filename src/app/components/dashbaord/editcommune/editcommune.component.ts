import { Component ,NgZone, OnInit } from '@angular/core';
import { FormBuilder,FormControlName,FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';
@Component({
  selector: 'app-editcommune',
  templateUrl: './editcommune.component.html',
  styleUrls: ['./editcommune.component.css']
})
export class EditcommuneComponent implements OnInit {
 editcommne: any = [];
  updatecommuneForm!: FormGroup;
  nom?:'';
  
  ngOnInit() {
    this.updateForm()
  }
  constructor(
    private actRoute: ActivatedRoute,    
    private formService : ServicecommuneService,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    // var id = this.actRoute.snapshot.paramMap.get('id');
    // this.formService.GetCommune(id).subscribe((data) => {
    //   this.updatecommuneForm = this.fb.group({
    //     nom: [data],
        
    //   })
    // })
  }
  updateForm(){
    this.updatecommuneForm = this.fb.group({
      nom: [''],
      
    })    
  }
  submitForm(){ 
    // var id = this.actRoute.snapshot.paramMap.get('id');
    // this.formService.UpdateCommune(id, this.updatecommuneForm.value).subscribe(res => {
    //   this.ngZone.run(() => this.router.navigateByUrl('dashbaord/listcommune'))
    // })
  }

}
