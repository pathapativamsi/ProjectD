import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProjectD';
  data:any = [];

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("https://localhost:5001/api/user").subscribe(
      (users)=>{this.data = users;
      console.log(users);
      },
      (error)=>{console.log(error)}
    )
  }
}
