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

  private plasticprice:number;
  private electronicsprice:number;
  private garbageprice:number;

  private plasticid:any;
  private electronicsid:any;
  private garbageid:any;

  public products:{}[]=[];
  public productsArray:{id:number,price:number}[]=[];
  public inputType:String='password';
  vendorSession:boolean=false;
  
  submitted = false;

  constructor(private http:HttpClient) { }


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


  ngOnInit() {
    sessionStorage.setItem("vendorusername",null);
    // if(sessionStorage.getItem("vendorusername")!=null)
    // {
    //   this.vendorSession=!this.vendorSession;
    // }
  }

  
  setPlastic()
  {
    this.plastic=!this.plastic;
    if(this.plasticid==undefined)
    {
      this.plasticid=1;  
    }
    else{
      this.plasticid=undefined;
    }
    
  }


  setElectronics()
  {
    //if(this.plastic)
    this.electronics=!this.electronics;
    if(this.electronicsid==undefined)
    {
      //console.log("electronicsid=2");
      this.electronicsid=2;
    }
    else{
      this.electronicsid=undefined;
    }
    
  }
 
  setGarbage()
  {
    //if(this.plastic)
    this.garbage=!this.garbage;
    if(this.garbageid==undefined)
    {
      //console.log("garbageid=3");
      this.garbageid=3;
    }
    else
    {
      this.garbageid=undefined;
    }
  }


  register() {
    if(this.plasticid==1)
    {
      
      this.productsArray.push({id:this.plasticid,price:this.plasticprice});
      
    }
    if(this.electronicsid==2)
    {
      console.log("adding electronics"+this.electronicsid+""+this.electronicsprice);
      this.productsArray.push({id:this.electronicsid,price:this.electronicsprice});
      console.log("added");
    }
    if(this.garbageid==3)
    {
      console.log("adding garbage"+this.garbageprice+ " "+this.garbageid);
      this.productsArray.push({id:this.garbageid,price:this.garbageprice});
      console.log("added");
    }
    console.log("display productsArray");
    console.log(this.productsArray);
    this.products.push(this.productsArray);
    console.log(this.products);
    var obj={"username":this.UserName,"password":this.Password,"email":this.Email,"city":this.City,
            "contactNo":this.ContactNo,"securityAns":this.SecurityAns,"products":this.productsArray
              };

    //console.log("obj "+obj);
    console.log(JSON.stringify(obj));
    // console.log(this.productsArray);
    // this.products.push(this.productsArray);
    // console.log(this.products);
    this.http.post("http://localhost:8080/vendor",obj).subscribe(
      data=>console.log(data)
    );

  }


  login()
  {

  }


}
