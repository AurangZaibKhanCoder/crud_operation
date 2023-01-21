import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  // data='1';
name:string='';
value='';
name2: any;
name3: any;
//   getVal(val:string){
  //   console.log(val);
   
  //   this.data='khan is back'

  // }
  getdata(val:string){
  this.value=val
    console.log(this.value)
    
    this.name=this.value
    this.name2=this.value
    this.name3=this.value
  }
}
