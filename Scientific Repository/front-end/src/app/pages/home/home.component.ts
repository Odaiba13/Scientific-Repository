import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ListaUser=new Array<User>();
  listaUsers= new Array<User>();

  constructor(private http:UsersService, private http1:AccountService) {
  }

  
  ngOnInit(): void {
    this.http1.getUsers().subscribe(datos =>{
      for(let i=0;i<datos.items.length;i++){
        this.listaUsers.push(datos.items[i])
      }
    });
    console.log(this.listaUsers);
  }
  }
