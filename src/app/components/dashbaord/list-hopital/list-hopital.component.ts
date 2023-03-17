import { Component } from '@angular/core';
import { HopitalService } from 'src/app/services/hopital.service';

@Component({
  selector: 'app-list-hopital',
  templateUrl: './list-hopital.component.html',
  styleUrls: ['./list-hopital.component.css']
})
export class ListHopitalComponent {

  Hopitals: any = [];
  //  nom?:'';
  //  data?:'';
  //  commune:any;


   constructor(
     private hopitalform : HopitalService ){ }  // Issues list
    // listcommunes() {
    // return this.listcommune = this.data;
    //  }
     ngOnInit() {
      this.getHopital();
    }
   getHopital(): void {
      this.hopitalform.getListHopital().subscribe(data =>{
        this.Hopitals = data;

      });
    }

    hopitalDetails(id: number): void {
         this.hopitalform.getHopitalById(id).subscribe(() => {
           this.getHopital();
         });
       }

        updateHopital(id: number): void {
    this.hopitalform.updateHopital(id).subscribe(() => {
      this.getHopital();
      });
    }
    
     deleteHopital(id: number): void {
     this.hopitalform.deleteHopital(id).subscribe(() => {
       this.getHopital();
      });
     }
}
