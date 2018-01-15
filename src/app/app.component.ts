import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //../bootstrap/index.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  results = '';
 constructor(private http:HttpClient){
 }

 ngOnInit():void{
    this.http.get('http://localhost:8080/products/1').subscribe(data=>{
    console.log(data);
     });
 }
}
