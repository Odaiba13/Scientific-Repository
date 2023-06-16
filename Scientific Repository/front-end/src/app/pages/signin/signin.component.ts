import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/interfaces/User';
import { SigninService } from 'src/app/services/signin.service';
import { UsersService } from 'src/app/services/users.service'; 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

   signinForm: FormGroup;
   

  constructor(private fb:FormBuilder, private servicio:SigninService, private http:UsersService) { 
    this.signinForm=this.fb.group({
      username: ["",[Validators.required, Validators.maxLength(80)]],
      email: ["",[Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"), Validators.maxLength(80)]],
      charge: ["",[Validators.maxLength(50)]],
      password: ["" ,[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {}

  sendDataSignin(){
    let lista:User={
      username:this.signinForm.get('username')?.value,
      email:this.signinForm.get('email')?.value,
      charge:this.signinForm.get('charge')?.value,
      userpassword:this.signinForm.get('password')?.value
    }
    // let lista:Array<User>=[{
    //   username:this.signinForm.get('username')?.value,
    //   email:this.signinForm.get('email')?.value,
    //   charge:this.signinForm.get('charge')?.value,
    //   userpassword:this.signinForm.get('password')?.value
    // }];
    // this.servicio.saveData(lista);

    this.http.PostUser(lista).subscribe(datos =>{
      console.log(datos);
    });
  }
}
