import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  
  listaUsers= new Array<User>();

  constructor( private http:AccountService ) {}

  ngOnInit(): void {
    this.http.getUsers().subscribe(datos =>{
      for(let i=0;i<datos.items.length;i++){
        this.listaUsers.push(datos.items[i])
      }
    });
    console.log(this.listaUsers);
  }
}


