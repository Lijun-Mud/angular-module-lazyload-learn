import { Component,OnInit } from '@angular/core';
import {HelloService} from "./hello.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements  OnInit {
    ngOnInit(): void {
        this.greet(this.greeting);
    }

    greeting:string="@@home greeting@@";
    constructor(private helloService: HelloService) {
        
    }

    greet(name: string) {
        this.helloService.greet(name).subscribe(data => {
             this.greeting = data;
        });
    }
}
