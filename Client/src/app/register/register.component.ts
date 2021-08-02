import { Component, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }
  registerFormModel: any ={}

  onRegister(){
    this.account.register(this.registerFormModel).subscribe(data =>{
     console.log(data)
     this.cancel();
   },error =>{
    console.log(error)
   })
  }

  cancel(){
    this.cancelRegister.emit(false);
  }
}
