import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'about-para',
    template: '{{name}}',
})

export class AboutParameterComponent implements OnInit {
    name:string;
    constructor(private router:ActivatedRoute) {
        
    }

    ngOnInit(): void {
        this.name="about parameter:" + this.router.snapshot.params['id'];
    }
}