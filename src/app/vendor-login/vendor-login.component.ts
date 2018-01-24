import { Component, OnInit } from '@angular/core';
import { RouterModule,Routes, ActivatedRoute,Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.css']
})
export class VendorLoginComponent implements OnInit {

  public UserName:String;
  public Password:String;
  public inputType:String='password';
  //public usernamesession :any;
  public dataRecieved:any;
  key='vendorusername';

  

  constructor(private http:HttpClient,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  login()
  {
    console.log("UserName="+this.UserName+" Password="+this.Password );
    this.http.get("http://localhost:8080/vendor/namepassword/"+this.UserName+"/"+this.Password).subscribe(
      data=>
            sessionStorage.setItem(this.key,data["username"])
      
    
    );
    //this.router.navigate(['./register'], {relativeTo: this.route});
  
  }

  forgetPassword()
  {
    //var usernamesession=JSON.stringify(this.dataRecieved.username);
    //sessionStorage.setItem(key,usernamesession);
    
    //var session=sessionStorage.getItem('username');
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
