import { afterEveryRender, afterNextRender, Component, computed, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';
import { SafeCall } from '@angular/compiler';
import { signal } from '@angular/core';
import { effect } from '@angular/core';
import { WritableSignal } from '@angular/core';
import { Signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Header } from './header/header';

import { ReactiveFormsModule } from '@angular/forms';
// import { User } from './user/user';  // interface name is also User :(
import { User } from "./interfaces/User";

import { CommonModule } from '@angular/common';
import { CurrencyConvertorPipe } from './pipe/currency-convertor-pipe';
import { Product } from './services/product';
import { Users } from './services/users';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup, Profile, FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase, RouterLink, Header, ReactiveFormsModule, CommonModule, CurrencyConvertorPipe],
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


  // color = 'orange';
  // fontSize = '15px';

  // fontSizeBig = '60px';
  // fontSizeNormal = '30px';
  // zoom = true;
  // size = 45;

  // zoomToggle() {
  //   this.zoom = !this.zoom; 
  // }



  // show = true;

  // students = ['Sumit','Sarvagya','Sharad', 'Rudar', 'Sachit', 'Smarth', 'Safal', 'Mohit', 'Anshul', 'Bipin'];

  // studentData = [{
  //   name: 'Sumit',
  //   age:25,
  //   email:'Sumit@test.com'
  // },
  // {
  //   name: 'Sharad',
  //   age:22,
  //   email:'Sharad@test.com'
  // },
  // {
  //   name: 'Roham',
  //   age:18,
  //   email:'Rohan@test.com'
  // },
  // {
  //   name: 'Anshul',
  //   age:21,
  //   email:'Anshul@test.com'
  // },
  // {
  //   name: 'Rudar',
  //   age:21,
  //   email:'Rudar@test.com'
  // }]


  // show = true;
  // toggle() {
  //   this.show = !this.show;
  // }

  // block=1;
  // updateBlockVal(){
  //   this.block++;
  // }

  // login=true;
  // loginToggle(){
  //   this.login = !this.login;
  // }

  // color = 'red';

  // changeColor(str:string){
  //   this.color = str;
  // }

  // name = new FormControl('anil');
  // password = new FormControl('123');
  // email = new FormControl('anil@test.com');

  // getValue() {
  //   console.log(this.name.value);
  //   console.log(this.password.value);
  //   console.log(this.email.value);
  // }
  // setValue(){
  //   this.name.setValue("peter");
  //   this.password.setValue("1234");
  //   this.email.setValue("peter@test.com");
  // }

  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl('', [Validators.required, Validators.maxLength(30),Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
  // });

  // submitData() {
  //   console.log(this.profileForm.value);
  // }

  // setValues() {
  //   this.profileForm.setValue({
  //     name: 'peter',
  //     password: '123',
  //     email: 'peter@test.com'
  //   })
  // }

  // get name() {
  //   return this.profileForm.get('name');
  // }
  // get email() {
  //   return this.profileForm.get('email');
  // }
  // get password() {
  //   return this.profileForm.get('password');
  // }


  // userData:NgForm|null=null;
  // userData: any | null = null;

  // addUser(val: NgForm) {
  //   console.log(val);
  //   this.userData = val;
  // }


  // userName = '';
  // city='';

  // changeUser(val:string){
  //   this.userName = val;
  // }

  // users = ['Anil', 'Sam', 'Peter', 'Bruce', 'John'];

  // users: undefined | string[];

  // handleUsers(users: string[]) {
  //   console.log(users);
  //   this.users = users;
  // }

  // amount=10;


  // @ViewChild('user') User: any;

  // counter = 0;

  // constructor() {
  //   afterEveryRender(() => {
  //     console.log("afterEveryRender", this.User.counter);
  //   })
  //   afterNextRender(() => {
  //     console.log("afterNextRender", this.User.counter);
  //   })
  // }

  // updateCounter() {
  //   this.counter++;
  // }


  // title="Code step by step";
  // date = new Date();
  // amount=10;

  // productData: {name:string,brand:string,price:number}[] | undefined;

  // constructor(private productService:Product){

  // }

  // getProductData(){
  //   this.productData = this.productService.getProductData();
  //   console.log(this.productData);
  // }


  // productList:any;
  // constructor(private productService:Product){

  // }

  // ngOnInit(){
  //   this.productService.getProductList().subscribe((data:any)=>{
  //     console.log(data);
  //     this.productList=data.products;
  //   })

  // }


  // users: User[] = [];

  // selectedUser: User | undefined;

  // constructor(private userService: Users) { }

  // ngOnInit() {
  //   this.getUser();
  // }

  // getUser() {
  //   this.userService.getUsers().subscribe((data: User[]) => {
  //     this.users = data;
  //     console.log(this.users);
  //   })
  // }

  // addUser(user: User) {
  //   if (!this.selectedUser) {
  //     this.userService.saveUsers(user).subscribe((data: User) => {
  //       console.log(data);
  //       if (data) {
  //         this.getUser();
  //       }
  //     })
  //   }
  //   else {
  //     const userData = {...user,id:this.selectedUser.id};

  //     this.userService.updateUser(userData).subscribe((data)=>{
  //       if(data){
  //         this.getUser()
  //       }
  //     })
  //   }
  // }

  // deleteUser(id: string) {
  //   this.userService.deleteUser(id).subscribe((data: User) => {
  //     console.log(data);
  //     if (data) {
  //       this.getUser();
  //     }
  //   })
  // }


  // selectUser(id: string) {
  //   this.userService.getSelectedUser(id).subscribe((data: User) => {
  //     this.selectedUser = data;
  //   })
  // }



}