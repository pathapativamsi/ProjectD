import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from '../_Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl:string = 'https://localhost:5001/api/account/login';
  private currentUserSource = new ReplaySubject(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient) { }
  login(model:any): Observable<any>{
    return this.http.post<User>(this.baseUrl,model).pipe(
      map((response: User)=>{
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: User){
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(undefined);
  }

}
