import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { NavbarComponent } from './components/page/navbar/navbar.component';
import { HomeComponent } from './components/page/home/home.component';
import { NosServiceComponent } from './components/page/nos-service/nos-service.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { HeaderComponent } from './components/page/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/page/footer/footer.component';
import { CommuneComponent } from './components/froms/commune/commune.component';
import { SpecialiteComponent } from './components/dashbaord/specialite/specialite.component';
import { AddComponent } from './components/dashbaord/add/add.component';
import { IndexComponent } from './components/dashbaord/index/index.component';
import { ListcommunesComponent } from './components/dashbaord/listcommunes/listcommunes.component';
import { EditcommuneComponent } from './components/dashbaord/editcommune/editcommune.component';
import { HttpClientModule } from '@angular/common/http';
import { HopitalComponent } from './components/dashbaord/hopital/hopital.component';
import { ListHopitalComponent } from './components/dashbaord/list-hopital/list-hopital.component';
import { EditHopitalComponent } from './components/dashbaord/edit-hopital/edit-hopital.component';
import { ListSpecialiteComponent } from './components/dashbaord/list-specialite/list-specialite.component';
import { EditSpecialiteComponent } from './components/dashbaord/edit-specialite/edit-specialite.component';
import { MedecinComponent } from './components/dashbaord/medecin/medecin.component';
import { ListMedecinComponent } from './components/dashbaord/list-medecin/list-medecin.component';
import { EditMedecinComponent } from './components/dashbaord/edit-medecin/edit-medecin.component';
import { PresentationComponent } from './components/page/presentation/presentation.component';
import { NavbarsdashComponent } from './components/dashbaord/navbarsdash/navbarsdash.component';
// import { NavbarComponent } from './components/dashbaord/navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    NosServiceComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    CommuneComponent,
    SpecialiteComponent,
    AddComponent,
    IndexComponent,
    ListcommunesComponent,
    EditcommuneComponent,
    HopitalComponent,
    ListHopitalComponent,
    EditHopitalComponent,
    ListSpecialiteComponent,
    EditSpecialiteComponent,
    MedecinComponent,
    ListMedecinComponent,
    EditMedecinComponent,
    PresentationComponent,
    NavbarsdashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // formService 
    // ServiceModule,
  ],
  // exports:[
  //   ServiceModule,
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  commune_id ?: any;
  nom ?: string;
}
