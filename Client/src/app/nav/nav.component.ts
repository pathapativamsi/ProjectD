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
  constructor(public account: AccountService) { }

  ngOnInit(): void {
  }
  isLoggedIn:boolean=false;
  onSubmit(){
    console.log(this.model);
    this.account.login(this.model).subscribe((data:any) => {
      console.log(data);
    },(error:any) => console.log(error))
  }

  logout(){
    this.account.logout();
  }

}
