import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about-sub',
    template: 'from sub folder {{name}}',
})

export class AboutSubComponent implements OnInit {
    name: string;
    constructor(private router: ActivatedRoute) {

    }

    ngOnInit(): void {
        this.name = " AboutSubComponent:" + this.router.snapshot.params['id'];
    }
}