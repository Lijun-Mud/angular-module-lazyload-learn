import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { routes } from "./routes";
import { HomeModule } from "./components/home/home.module";
import { AboutModule } from "./components/about/about.module";
//import {CounterModule } from "./components/counter/counter.module"

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        routes,
        HomeModule,
        AboutModule,
        //CounterModule,
    ]
})
export class AppModuleShared {
}
