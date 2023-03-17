import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { HeaderComponent } from './components/page/header/header.component';
// import { LoginComponent } from './components/authentification/login/login.component'
import { FooterComponent } from './components/page/footer/footer.component';
import { NosServiceComponent } from './components/page/nos-service/nos-service.component';
import { IndexComponent } from './components/dashbaord/index/index.component';
import { AddComponent } from './components/dashbaord/add/add.component';
import { ListcommunesComponent } from './components/dashbaord/listcommunes/listcommunes.component';
import { EditcommuneComponent } from './components/dashbaord/editcommune/editcommune.component';
import { HopitalComponent } from './components/dashbaord/hopital/hopital.component';
import { ListHopitalComponent } from './components/dashbaord/list-hopital/list-hopital.component';

const routes : Routes =  [
  {
    path : '' , redirectTo :'page/header', pathMatch : 'full'
  },

  // {
  //   path : '' , redirectTo :'page/header', pathMatch : 'full'
  // },
  {
    path :'auth/login',
    component : LoginComponent
  },

  {
    path :'auth/register',
    component : RegisterComponent
  },

  {
    path :'page/header',
    component : HeaderComponent
  },

  {
    path :'contact', component : ContactComponent
  },

  {
    path : 'page/footer',
    component : FooterComponent
  },
  {
    path : 'page/nos-service',
    component : NosServiceComponent
  },
 {
  path : 'dashbaord/index',
  component :IndexComponent
 },
 {
  path : 'dashbaord/Add',
  component : AddComponent
},
{
  path : 'dashbaord/listcommunes',
  component: ListcommunesComponent
},
{
  path : 'dashbaord/editcommune',
  component : EditcommuneComponent
},
{
  path : 'dashbaord/hopital',
  component : HopitalComponent
},
{
  path :'dashbaord/list-hopital',
  component : ListHopitalComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
