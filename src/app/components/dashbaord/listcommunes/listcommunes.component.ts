import { Component, OnInit } from '@angular/core';
import { ServicecommuneService } from 'src/app/services/servicecommune.service';
//import { CommuneComponent } from '../../froms/commune/commune.component/';

@Component({
  selector: 'app-listcommunes',
  templateUrl: './listcommunes.component.html',
  styleUrls: ['./listcommunes.component.css']
})
export class ListcommunesComponent implements OnInit {


   Communes: any = [];
  //  nom?:'';
  //  data?:'';
  //  commune:any;


   constructor(
     private formService : ServicecommuneService ){ }  // Issues list
    // listcommunes() {
    // return this.listcommune = this.data;
    //  }
     ngOnInit() {
      this.getCommune();
    }
   getCommune(): void {
      this.formService.getListcommune().subscribe(data =>{
        this.Communes = data;

      });
    }

    communeDetails(id: number): void {
         this.formService.getCommuneById(id).subscribe(() => {
           this.getCommune();
         });
       }

        updateCommue(id: number): void {
    this.formService.updateCommune(id).subscribe(() => {
      this.getCommune();
      });
    }
    
     deleteCommune(id: number): void {
     this.formService.deleteCommune(id).subscribe(() => {
       this.getCommune();
      });
     }
  }

  // reservations!: Reservation[];

  // constructor(private reservationService: ReservationService) { }

  // ngOnInit(): void {
  //   this.getReservation();
  // }

  // private getReservation(): void {
  //   this.reservationService.getReservationList().subscribe(data => {
  //     this.reservations = data;
  //   });
  // }

  // reservationDetails(id: number): void {
  //   this.reservationService.getReservationById(id).subscribe(() => {
  //     this.getReservation();
  //   });
  // }

  // updateReservation(id: number): void {
  //   this.reservationService.updateReservation(id).subscribe(() => {
  //     this.getReservation();
  //   });
  // }

  // deleteReservation(id: number): void {
  //   this.reservationService.deleteReservation(id).subscribe(() => {
  //     this.getReservation();
  //   });
  
    

  // commune:any;
  // currentIndex = -1;
  // title = '';

  // constructor( private formSercice : ServicecommuneService){}
  
  // ngOnInit(): void {
  //   this.retrieveTutorials()
  //   //  this.commune.getCommunes();
  //   //  this.commune.getCommunes().subscribe(
  //   //   (result:any)=>{
  //   //     //console.log(result)
  //   //     this.commune  =  result.data;
  //   //   }
  //   // )

  // deleteCommune(data:any){
  //   console.log(id);
  //    this.formService.DeleteCommune(data.id).subscribe(data=>{
  //      this.commune = this.commune.filter((u: any) => u !== this.commune);
  //    })
  //  }
  // }