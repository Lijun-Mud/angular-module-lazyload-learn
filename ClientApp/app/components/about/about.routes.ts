import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import { AboutComponent } from "./about.component";
import { AboutParameterComponent } from "./about.parameter";
import {AboutSubComponent} from "./sub/about.sub";

export const aboutRoutes: ModuleWithProviders = RouterModule.forChild([
    { path: "about", component: AboutComponent },
    { path: "aboutpp/:id", component: AboutParameterComponent },
    { path: "about/:id", component: AboutSubComponent },
]);
