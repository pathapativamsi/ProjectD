import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { User } from './_Interfaces/User';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectD';
  data:any = [];

  constructor(private http: HttpClient, private acountService: AccountService){}

  ngOnInit(){
    this.http.get("https://localhost:5001/api/user").subscribe(
      (users)=>{this.data = users;
      console.log(users);
      },
      (error)=>{console.log(error)}
    );
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user') ?? null);
    this.acountService.setCurrentUser(user);
  }
}
