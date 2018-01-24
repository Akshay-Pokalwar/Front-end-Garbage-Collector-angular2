import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendorregister',
  templateUrl: './vendorregister.component.html',
  styleUrls: ['./vendorregister.component.css']
})
export class VendorregisterComponent implements OnInit {

  private UserName:String;
  private Password:String;
  private Email:String;
  private ContactNo:String;
  private City:String;
  private SecurityAns:String;

  private plastic=false;
  private electronics=false;
  private garbage=false;

  private plasticprice:any;
  private electronicsprice:any;
  private garbageprice:any;

  private plasticid:any;
  private electronicsid:any;
  private garbageid:any;

  public products:Array<any>;

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

  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }

  register() {
    var obj={"username":this.UserName,"password":this.Password,"email":this.Email,"city":this.City,
    "contactNo":this.ContactNo,"securityAns":this.SecurityAns,
    "products":[
      {
      "id":1,
      price:this.plasticprice
      },
//this is to be done
  ]
  }
    console.log(obj);
    console.log(JSON.stringify(obj));
    this.http.post("http://localhost:8080/user",obj).subscribe(
      data=>console.log(data)
    );

  }

  setPlastic()
  {
    //if(this.plastic)
    this.plastic=!this.plastic;
    this.plasticid=1;
  }
  unsetPlastic()
  {
    //if(this.plastic)
    this.plasticid=0;
  }

  setElectronics()
  {
    //if(this.plastic)
    this.electronics=!this.electronics;
    this.electronicsid=2;
  }
  unsetElectronics()
  {
    //if(this.plastic)
    this.electronicsid=0;
  }

  setGarbage()
  {
    //if(this.plastic)
    this.garbage=!this.garbage;
    this.garbageid=3;
  }

  unsetGarbage()
  {
    //if(this.plastic)
    this.garbageid=0;
  }

  setIntoArray()
  {
    this.products=[
      {

      "id":this.plasticid,
      "price":this.plasticprice
    },
  ]
  }
  login()
  {

  }


}
