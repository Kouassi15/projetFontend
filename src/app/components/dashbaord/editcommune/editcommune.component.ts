import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormArray,FormControlName,FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';

@Component({
  selector: 'app-editcommune',
  templateUrl: './editcommune.component.html',
  styleUrls: ['./editcommune.component.css']
})
export class EditcommuneComponent implements OnInit {

   ngOnInit(): void {
     
   }

   constructor(){}
}