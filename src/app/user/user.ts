import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // name: string | null = "";
  // id: string | null = "";
  // constructor(private route: ActivatedRoute) {
  // }

  // ngOnInit() {
  //   this.route.params.subscribe((params) => {
  //     this.name = params['name'];
  //     this.id = params['id'];
  //   })
  // }

  // @Input() user: string = '';
  // @Input() city: string = '';

  // @Input() user: string = '';

  // @Output() getUsers = new EventEmitter();

  // users = ['Anil', 'Sidhu', 'Sam', 'Peter', 'Bruce'];

  // // ngOnInit() {
  // //   this.getUsers.emit(this.users);
  // // }

  // loadData() {
  //   this.getUsers.emit(this.users);
  // }

  @Input() counter=0;

  name = "anil";
  constructor() {
    console.log("constructor");
    this.name = "sid";
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.name = "sam";
  }
   ngOnDestroy(){
    console.log("ngOnDestroy");
   }

}
