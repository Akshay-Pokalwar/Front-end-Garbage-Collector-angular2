import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { error } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //../bootstrap/index.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public UserName:String;
  public Password:String;
  profile = {};

  constructor(private http:HttpClient) { }
 
  ngOnInit() {
    // this.http.get("localhost:8080/user/namepassword/sanyam/test1").subscribe(data=>{
    //   console.log(data);
    // });
  }

  login()
  {
    console.log("UserName="+this.UserName+" Password="+this.Password );
    this.http.get("http://localhost:8080/user/namepassword/"+this.UserName+"/"+this.Password).subscribe(
      data=>console.log(data),
      err=>this.logError(err)
  );
    //interceptors observables
  }
  logError(err: any) {
    console.log(err);
}

  // getUser(){
  //   return this.http.get("localhost:8080/user/namepassword/"+this.UserName+"/"+this.Password)
  //   .map((res:Response) => res.json());
  // }

}
