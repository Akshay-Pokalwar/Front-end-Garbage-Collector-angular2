import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private UserName:String;
  private Password:String;
  private Email:String;
  private ContactNo:String;
  private City:String;
  private SecurityAns:String;

  public inputType:String='password';
  
  submitted = false;
  onSubmit() { this.submitted = true; 
  console.log("submit");
  var obj={"username":this.UserName,"password":this.Password,"email":this.Email,"city":this.City,
    "contactNo":this.ContactNo,"securityAns":this.SecurityAns}
    console.log(JSON.stringify(obj));
  }

  public hideShowPassword()
  {
    if(this.inputType=='password')
    {
      this.inputType='text';
    }
    else{
      this.inputType='password';
    }
  }
  constructor(private http:HttpClient) { 
  
  }
  ngOnInit() {
  }

  /**
   * register
   */
  register() {
    var obj={"username":this.UserName,"password":this.Password,"email":this.Email,"city":this.City,
    "contactNo":this.ContactNo,"securityAns":this.SecurityAns}
    console.log(obj);
    console.log(JSON.stringify(obj));
    this.http.post("http://localhost:8080/user",obj).subscribe(
      data=>console.log(data)
    );

  }

  /**
   * login
   */
  login() {
    //get to login page
    console.log("login");
    //Route("/login",)
    //var session=sessionStorage.getItem('username');
    //console.log(session);
  }

}
