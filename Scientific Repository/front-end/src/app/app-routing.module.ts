import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyalgorithmsComponent } from './pages/myalgorithms/myalgorithms.component';
import { MycasesComponent } from './pages/mycases/mycases.component';
import { SigninComponent } from './pages/signin/signin.component';
import { TreatmentComponent } from './pages/treatment/treatment.component';
import { UploadalgorithmComponent } from './pages/uploadalgorithm/uploadalgorithm.component';
import { UploadcaseComponent } from './pages/uploadcase/uploadcase.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'signin', component:SigninComponent},
  {path: '', component:HomeComponent},
  {path: 'mycases',component:MycasesComponent},
  {path: 'myalgorithms',component:MyalgorithmsComponent},
  {path: 'uploadalgorithm',component:UploadalgorithmComponent},
  {path: 'uploadcase',component:UploadcaseComponent},
  {path: 'treatment', component:TreatmentComponent},
  {path: 'account', component:AccountComponent},
  {path:'**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
