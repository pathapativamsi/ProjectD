import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model:any={
    userName:'',
    Password:''
  }
  constructor(private account: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }
  isLoggedIn:boolean=false;
  onSubmit(){
    console.log(this.model);
    this.account.login(this.model).subscribe((data:any) => {
      console.log(data);
      this.isLoggedIn = true;
    },(error:any) => console.log(error))
  }

  logout(){
    this.account.logout();
    this.isLoggedIn = false;
  }

  getCurrentUser(){
    this.account.currentUser$.subscribe(user => {
      console.log(user)
      this.isLoggedIn = !!user
    },error=>console.log(error))
  }

}
