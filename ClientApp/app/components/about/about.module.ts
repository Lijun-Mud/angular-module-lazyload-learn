import {NgModule}       from "@angular/core";
import {AboutComponent} from "./about.component";
import {CommonModule} from "@angular/common";
import { aboutRoutes } from "./about.routes";

import { AboutParameterComponent } from "./about.parameter";
import { AboutSubComponent } from "./sub/about.sub";

@NgModule({
    declarations: [AboutComponent,AboutParameterComponent,AboutSubComponent],
    imports: [CommonModule, aboutRoutes],
    exports: [AboutComponent]
})
export class AboutModule {}
