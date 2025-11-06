import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-profile',
    // template: `<h1> Profile Component </h1>`,
    templateUrl: './profile.html',
    // styles: "h1 { color: darkgreen; }"
    styleUrl: './profile.css',
})

export class Profile {
    userName: string | null = "";
    constructor(private route: ActivatedRoute) {
    }

    // ngOnInit() {
    //     this.userName = this.route.snapshot.paramMap.get('name');
    // }

    // ngOnInit() {
    //     this.route.queryParams.subscribe((params) => {
    //         this.userName = params['name'];
    //     })
    // }

    ngOnInit(){
        this.route.data.subscribe(params=>{
            console.log(params);
            this.userName=params['name'];
        })
    } 
    
}