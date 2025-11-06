import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router:Router){

  }
  // users=[
  //   {id:'1',name:'Sharad',age:21},
  //   {id:'2',name:'Rohan',age:18},
  //   {id:'4',name:'Sumit',age:21},
  //   {id:'5',name:'Mithu',age:25},
  //   {id:'6',name:'Shivani',age:21},
  //   {id:'7',name:'Smarth',age:22},
  //   {id:'8',name:'Sachit',age:21},
  //   {id:'9',name:'Sachin',age:22}
  // ]

  goToProfile(){
    this.router.navigate(['profile'],{queryParams:{name:'Sharad'}});
  }

  

}
