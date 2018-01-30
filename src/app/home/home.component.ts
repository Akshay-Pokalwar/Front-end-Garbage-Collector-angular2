import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items:any=[];
  public productid:number=null;
  public productName:any;
  public message:String;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  search()
  {
    //console.log(this.productName);
    if(this.productName=="plastic" || this.productName=="Plastic")
    {
      this.productid=1;
      //console.log(this.productid);
    }
    else if(this.productName=='electronics' || this.productName=='Electronics')
    {
      this.productid=2;
      //console.log(this.productid);
    }
    else if(this.productName=='garbage' || this.productName=='Garbage')
    {
      this.productid=3;
      //console.log(this.productid);
    }
    //console.log(this.productid+"after");
    this.http.get("http://localhost:8080/vendor/usersearch/"+this.productid).subscribe(
      data=>{
        this.items =data;
      });
    
  }

}
