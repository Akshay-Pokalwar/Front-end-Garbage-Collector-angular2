import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes, ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public UserName:String;
  public Password:String;
  public inputType:String='password';
  //public usernamesession :any;
  public dataRecieved:any;
  key='username';

  constructor(private http:HttpClient,private router: Router,
    private route: ActivatedRoute) { }
  ngOnInit() {
    // this.http.get("localhost:8080/user/namepassword/sanyam/test1").subscribe(data=>{
    //   console.log(data);
    // });
  }

  login()
  {
    console.log("UserName="+this.UserName+" Password="+this.Password );
    this.http.get("http://localhost:8080/user/namepassword/"+this.UserName+"/"+this.Password).subscribe(
      data=>
            sessionStorage.setItem(this.key,data["username"])
      
    
    );
    //this.router.navigate(['./register'], {relativeTo: this.route});
  
  }

  forgetPassword()
  {
    //var usernamesession=JSON.stringify(this.dataRecieved.username);
    //sessionStorage.setItem(key,usernamesession);
    
   // var session=sessionStorage.getItem('username');
    //console.log(session);
  }


  

hideShowPassword()
{
  if(this.inputType=='password')
  {
    this.inputType='text';
  }
  else{
    this.inputType='password';
  }
}
}
