import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/interfaces/Credentials';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  
  constructor(private fb:FormBuilder, private servicio:LoginService) {
    this.loginForm = this.fb.group({
      email: ["",[Validators.required,Validators.email]],
      password: ["" , Validators.required]
    });
  }

  ngOnInit(): void {}
  
  sendDataLogin(){
    let lista:Array<Credentials>=[{
      email:this.loginForm.get('email')?.value,
      userpassword:this.loginForm.get('password')?.value,
    }];

    this.servicio.cargarDatos(lista);
  }

}
