import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { SafeCall } from '@angular/compiler';
import { signal } from '@angular/core';
import { effect } from '@angular/core';
import { WritableSignal } from '@angular/core';
import { Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('my-first-angular-app');

  // hello() {
  //   let x = 10;
  //   var y = 20;
  //   const z = 30;
  // }

  // handleClickEvent() {
  //   alert("Function Clicked!");
  //   this.otherFunction();
  // }

  // otherFunction() {
  //   console.log("Other Function");
  // }

  // name: string = "Sharad Chandel";
  // // data: number | string = 100;
  // userlogin: boolean = true;
  // info: any = "This is some data";
  // email = "sharadchandel2005@gmail.com"

  // sum(a: number, b: number) {
  //   console.log("Sum is: ", a + b);
  // }

  //  count: number = 0;

  // handleIncrement() {
  //   this.count++;
  // }
  // handleDecrement() {
  //   this.count--;
  // }
  // handleReset() {
  //   this.count = 0;
  // }

  // handleCounter(str: string) {
  //   if (str == "minus") {
  //     if (this.count > 0) { this.count--; }
  //   }
  //   else if (str == "plus") {
  //     this.count++;
  //   }
  //   else {
  //     this.count = 0;
  //   }
  // }


  // username = "";
  // getUserName(event: Event) {
  //   // this.username = (event.target as HTMLInputElement).value;
  //   // console.log(name);
  //   // this.username = name;
  // }

  // setUserName() {
  //   this.username = "Angular Developer";
  // }

  // getUserNameWithTemplate(val: string) {
  //   this.username = val;
  // }

  // display = true;
  // val = 10;

  // hide() {
  //   this.display = false;
  // }
  // show() {
  //   this.display = true;
  // }
  // toggle() {
  //   this.display = !this.display;
  // }

  // displayOneDiv = true;
  // toggleDivs() {
  //   this.displayOneDiv = !this.displayOneDiv;
  // }

  // color = 'red';

  // handleColor(val: string) {
  //   this.color = val;
  // }
  // changeColor(event: Event) {
  //   this.color = (event.target as HTMLInputElement).value;
  // }

  // users = ['sharad', 'sachit', 'shaiv', 'smarth', 'rudar', 'Safal', 'anshul', 'mohit'];
  // students = [
  //   { name: 'sharad', age: 21, email: 'sharadchandel2005@gmail.com' },
  //   { name: 'rohan', age: 18, email: 'rohanchandel2007@gmail.com' },
  //   { name: 'anshul', age: 21, email: 'anshulkatoch711@gmail.com' },
  //   { name: 'mohit', age: 21, email: 'mohitthakur@gmail.com' },
  //   { name: 'rudar', age: 21, email: 'princeSinghHulk@gmail.com' },
  //   { name: 'shaiv', age: 22, email: 'shaivsood@gmail.com' }
  // ]

  // getName(name:string){
  //   console.log(name);
  // }

  // handleEvent(event:Event){
  //   console.log("function called:",event.type);
  //   // console.log("function called:",(event.target as HTMLInputElement).value);
  // }


  //data = 100;
  // count=signal(10);

  // updateValue(){
  //   this.data=200;
  //   // this.count = 1000;  this won't work
  //   this.count.set(20);
  // }
  // updateValue(val:string){
  //   if(val=='dec'){
  //     this.count.set(this.count()-1);
  //   }else{
  //     this.count.set(this.count()+1);
  //   } 
  // }

  // constructor() {
  //   effect(() => {
  //     console.log(this.count());
  //   })
  // }

  // // data = signal<number | string>(10);
  // data: WritableSignal<number> = signal(10);
  // count: Signal<number> = signal(10);

  // updateValue(){
  //  this.data.update(val=>val+10);
  // }

  // data = computed(() =>20);
  // count = signal(20);

  // x = signal(20);
  // y = signal(30);

  // z = computed(() => this.x() + this.y());

  // updateValue(){
  //   // this.data.set(30);  // This won't work as computed signals are read-only
  //   // this.count.set(30); // This will work

  //   console.log(this.z);
  //   this.x.set(100);
  //   console.log(this.z);
  // }

  // updateXValue(){
  //   this.x.set(1000);
  // }


  // username = signal('Guest User');

  // constructor(){
  //   effect(()=>{
  //     console.log("Username changed to:" + this.username());
  //   })
  // }

  // count = signal(0);
  // displayHeading = false;

  // constructor() {
  //   effect(() => {
  //     if (this.count() == 2) {
  //       this.displayHeading = true;
  //     }
  //     else {
  //       this.displayHeading = false;
  //     }
  //   })
  // }


  // users = ['Shaiv', 'Rudar', 'Sachit', 'Smarth', 'Safal', 'Mohit', 'Anshul', 'Bipin'];


  // name = 'anil';

  // changeName(event: Event) {
  //   const VAL = (event.target as HTMLInputElement).value;
  // }


  // task = "Meeting at 10 AM";
  // taskList: { id: number, name: string }[] = [];

  // addTask() {
  //   this.taskList.push({ id: this.taskList.length + 1, name: this.task });
  //   console.log(this.taskList);
  // }

  // deleteTask(id: number) {
  //   this.taskList = this.taskList.filter((item) => item.id != id);
  // }


  color = 'orange';
  fontSize = '15px';

  fontSizeBig = '60px';
  fontSizeNormal = '30px';
  zoom = true;
  size = 45;

  zoomToggle() {
    this.zoom = !this.zoom; 
  }
  
}
